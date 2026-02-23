const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'info@ms-fahrdienst.com';

module.exports = async (req, res) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, email, service, message } = req.body;

    // Validate required fields
    if (!name || !phone || !email || !service || !message) {
      return res.status(400).json({ 
        error: 'Alle Pflichtfelder müssen ausgefüllt sein.' 
      });
    }

    // Create HTML email content
    const htmlContent = `
    <html>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #0F4C81;">Neue Kontaktanfrage von der Website</h2>
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Telefon:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">E-Mail:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Gewünschte Leistung:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${service}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Nachricht:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${message}</td>
            </tr>
        </table>
        <p style="margin-top: 20px; color: #666; font-size: 12px;">
            Diese Nachricht wurde über das Kontaktformular auf der Website gesendet.
        </p>
    </body>
    </html>
    `;

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Fahrdienst Schappert <info@ms-fahrdienst.com>',
      to: [CONTACT_EMAIL],
      subject: `Neue Anfrage: ${service} - ${name}`,
      html: htmlContent,
      reply_to: email
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ 
        error: 'Fehler beim Senden der E-Mail.' 
      });
    }

    return res.status(200).json({
      status: 'success',
      message: 'Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns schnellstmöglich bei Ihnen.'
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ 
      error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' 
    });
  }
};
