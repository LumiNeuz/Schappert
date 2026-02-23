# Fahrdienst Schappert - Kontaktformular API

Diese Vercel Serverless Function verarbeitet das Kontaktformular und sendet E-Mails über Resend.

## Deployment auf Vercel

### 1. Vercel CLI installieren (optional)
```bash
npm install -g vercel
```

### 2. Projekt auf Vercel deployen

**Option A: Über GitHub**
1. Pushe den `vercel-api` Ordner in ein separates GitHub Repository
2. Gehe zu https://vercel.com/new
3. Importiere das Repository
4. Vercel erkennt automatisch die Konfiguration

**Option B: Über Vercel CLI**
```bash
cd vercel-api
vercel
```

### 3. Umgebungsvariablen setzen
In Vercel Dashboard → Project → Settings → Environment Variables:

- `RESEND_API_KEY` = `re_eYZTdiUJ_CrzZdXp4XTXZ82JjojJFnbhP`
- `CONTACT_EMAIL` = `info@ms-fahrdienst.com`

### 4. Frontend anpassen
Nach dem Deployment erhältst du eine URL wie:
`https://fahrdienst-schappert-api.vercel.app`

Diese URL muss im Frontend eingetragen werden (ContactForm.jsx).

## API Endpoint

**POST** `/api/contact`

```json
{
  "name": "Max Mustermann",
  "phone": "06753 1234567",
  "email": "max@example.de",
  "service": "Krankenfahrten",
  "message": "Ihre Nachricht"
}
```
