
/**
 * Ascent Services contact form endpoint.
 *
 * Deploy as a Web app:
 * Execute as: Me
 * Who has access: Anyone
 *
 * Set the deployed /exec URL in Vercel:
 * VITE_GOOGLE_APPS_SCRIPT_URL
 */
const RECIPIENT_EMAIL = 'sales@ascentsservices.com';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || '{}');

    const subject =
      `New website enquiry — ${data.name || 'Website visitor'}`;

    const body = [
      `Name: ${data.name || ''}`,
      `Company: ${data.company || ''}`,
      `Work email: ${data.email || ''}`,
      `Phone: ${data.phone || ''}`,
      `Company size: ${data.companySize || ''}`,
      `Service interested in: ${data.service || ''}`,
      `Preferred contact method: ${data.contactMethod || ''}`,
      '',
      'Requirement:',
      data.requirement || '',
    ].join('\n');

    MailApp.sendEmail({
      to: RECIPIENT_EMAIL,
      replyTo: data.email || RECIPIENT_EMAIL,
      subject: subject,
      body: body,
    });

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(
        JSON.stringify({ ok: false, error: String(error) })
      )
      .setMimeType(ContentService.MimeType.JSON);
  }
}
