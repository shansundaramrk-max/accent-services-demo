/**
 * Ascent Services - website contact form -> email to sales@ascentsservices.com
 *
 * Deploy: script.google.com > New project > paste this file >
 *   Deploy > New deployment > type "Web app"
 *   Execute as: Me      Who has access: Anyone
 * Copy the Web app URL into the site's environment variable
 *   VITE_GOOGLE_APPS_SCRIPT_URL   then rebuild / redeploy the website.
 * (If you already have a deployment: Deploy > Manage deployments > Edit > New version.)
 */
const TO_EMAIL = 'sales@ascentsservices.com';

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);

    // Spam trap: the hidden "website" field must be empty.
    if (d.website) return reply_({ ok: true });

    const name = clean_(d.name), company = clean_(d.company), email = clean_(d.email);
    if (!name || !email) return reply_({ ok: false, error: 'Missing name or email' });

    const rows = [
      ['Name', name],
      ['Company', company],
      ['Email', email],
      ['Phone', clean_(d.phone)],
      ['Company size', clean_(d.companySize)],
      ['Service interested in', clean_(d.service) || 'Not sure yet'],
      ['Preferred contact', 'Email'],
      ['Submitted from', clean_(d.page)],
    ];
    const message = clean_(d.requirement) || '(no message)';

    const text = rows.map(r => r[0] + ': ' + r[1]).join('\n') + '\n\nWhat they want to solve:\n' + message;
    const html =
      '<div style="font-family:Arial,sans-serif;max-width:600px">' +
      '<h2 style="margin:0 0 12px">New website enquiry</h2>' +
      '<table style="border-collapse:collapse;width:100%">' +
      rows.map(r => '<tr><td style="padding:6px 12px 6px 0;color:#666;white-space:nowrap">' + esc_(r[0]) +
        '</td><td style="padding:6px 0"><b>' + esc_(r[1]) + '</b></td></tr>').join('') +
      '</table><h3 style="margin:20px 0 6px">What they want to solve</h3>' +
      '<p style="white-space:pre-wrap;margin:0">' + esc_(message) + '</p></div>';

    MailApp.sendEmail({
      to: TO_EMAIL,
      replyTo: email,                       // hitting Reply answers the enquirer
      subject: 'Website enquiry: ' + name + (company ? ' (' + company + ')' : ''),
      body: text,
      htmlBody: html,
      name: 'Ascent Services Website',
    });
    return reply_({ ok: true });
  } catch (err) {
    return reply_({ ok: false, error: String(err) });
  }
}

function clean_(v) { return v == null ? '' : String(v).trim().slice(0, 5000); }
function esc_(v) {
  return String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function reply_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
