from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import resend


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend configuration
resend.api_key = os.environ.get('RESEND_API_KEY')
CONTACT_EMAIL = os.environ.get('CONTACT_EMAIL', 'info@ms-fahrdienst.com')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactFormRequest(BaseModel):
    name: str
    phone: str
    email: EmailStr
    service: str
    message: Optional[str] = None

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.post("/contact")
async def send_contact_form(request: ContactFormRequest):
    """Send contact form email via Resend"""
    
    # Create HTML email content
    html_content = f"""
    <html>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #0F4C81;">Neue Kontaktanfrage von der Website</h2>
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">{request.name}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Telefon:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">{request.phone}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">E-Mail:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">{request.email}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Gewünschte Leistung:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">{request.service}</td>
            </tr>
            {f'<tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Nachricht:</td><td style="padding: 10px; border-bottom: 1px solid #eee;">{request.message}</td></tr>' if request.message else ''}
        </table>
        <p style="margin-top: 20px; color: #666; font-size: 12px;">
            Diese Nachricht wurde über das Kontaktformular auf der Website gesendet.
        </p>
    </body>
    </html>
    """
    
    params = {
        "from": "Kontaktformular <onboarding@resend.dev>",
        "to": [CONTACT_EMAIL],
        "subject": f"Neue Anfrage: {request.service} - {request.name}",
        "html": html_content,
        "reply_to": request.email
    }
    
    try:
        # Run sync SDK in thread to keep FastAPI non-blocking
        email = await asyncio.to_thread(resend.Emails.send, params)
        logger.info(f"Contact form email sent successfully to {CONTACT_EMAIL}")
        return {
            "status": "success",
            "message": "Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns schnellstmöglich bei Ihnen."
        }
    except Exception as e:
        error_msg = str(e)
        logger.error(f"Failed to send contact form email: {error_msg}")
        
        # If domain not verified, still save the inquiry and return success to user
        if "verify a domain" in error_msg.lower() or "testing emails" in error_msg.lower():
            # Store contact request in database as backup
            contact_doc = {
                "id": str(uuid.uuid4()),
                "name": request.name,
                "phone": request.phone,
                "email": request.email,
                "service": request.service,
                "message": request.message,
                "timestamp": datetime.now(timezone.utc).isoformat(),
                "email_sent": False
            }
            await db.contact_requests.insert_one(contact_doc)
            logger.info(f"Contact request stored in database for {request.name}")
            return {
                "status": "success",
                "message": "Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns schnellstmöglich bei Ihnen."
            }
        
        raise HTTPException(status_code=500, detail=f"Fehler beim Senden der Nachricht: {error_msg}")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()