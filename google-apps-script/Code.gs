/**
 * Ascent Services contact form endpoint.
 *
 * 1. Create a Google Apps Script project.
 * 2. Paste this file into Code.gs.
 * 3. Change RECIPIENT_EMAIL.
 * 4. Deploy as a Web app: Execute as "Me", access "Anyone".
 * 5. Put the deployed /exec URL into VITE_GOOGLE_APPS_SCRIPT_URL.
 */
const RECIPIENT_EMAIL = 'YOUR_GMAIL_ADDRESS_HERE';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || '{}');
    const subject = `New website enquiry — ${data.name || 'Website visitor'}`;

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
      subject,
      body,
    });

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
