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
      ['Submitted from', clean_(d.page)],
    ];
    const message = clean_(d.requirement) || '(no message)';

    const when = Utilities.formatDate(new Date(), 'Australia/Sydney', 'EEE d MMM yyyy, h:mm a');
    const text = 'NEW WEBSITE ENQUIRY (' + when + ')\n\n' +
      rows.map(r => r[0] + ': ' + r[1]).join('\n') +
      '\n\nWhat they want to solve:\n' + message;

    const detail = rows.map((r, i) =>
      '<tr>' +
      '<td style="padding:13px 0;' + (i ? 'border-top:1px solid #e6ebf2;' : '') + 'width:34%;font-size:13px;color:#6b778c;vertical-align:top">' + esc_(r[0]) + '</td>' +
      '<td style="padding:13px 0;' + (i ? 'border-top:1px solid #e6ebf2;' : '') + 'font-size:15px;color:#0b1426;font-weight:600;word-break:break-word">' +
      (r[0] === 'Email'
        ? '<a href="mailto:' + esc_(r[1]) + '" style="color:#0a66e8;text-decoration:none">' + esc_(r[1]) + '</a>'
        : esc_(r[1] || '—')) +
      '</td></tr>').join('');

    const html =
      '<div style="margin:0;padding:28px 12px;background:#f1f4f9;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif">' +
      '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e1e7f0">' +
        '<tr><td style="background:#0b1426;padding:26px 32px">' +
          '<div style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#6ee7c8;font-weight:700">Ascent Services</div>' +
          '<div style="font-size:24px;color:#ffffff;font-weight:700;margin-top:8px">New website enquiry</div>' +
          '<div style="font-size:13px;color:#9fb0cc;margin-top:6px">Received ' + esc_(when) + '</div>' +
        '</td></tr>' +
        '<tr><td style="padding:26px 32px 8px">' +
          '<div style="font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#6b778c;font-weight:700;margin-bottom:4px">Contact details</div>' +
          '<table role="presentation" width="100%" cellspacing="0" cellpadding="0">' + detail + '</table>' +
        '</td></tr>' +
        '<tr><td style="padding:20px 32px 8px">' +
          '<div style="font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#6b778c;font-weight:700;margin-bottom:10px">What they want to solve</div>' +
          '<div style="padding:16px 18px;background:#f5f8fc;border-left:4px solid #0a66e8;border-radius:8px;font-size:15px;line-height:1.65;color:#0b1426;white-space:pre-wrap">' + esc_(message) + '</div>' +
        '</td></tr>' +
        '<tr><td style="padding:22px 32px 30px">' +
          '<a href="mailto:' + esc_(email) + '" style="display:inline-block;background:#0a66e8;color:#ffffff;text-decoration:none;font-weight:600;font-size:14px;padding:12px 24px;border-radius:999px">Reply to ' + esc_(name) + '</a>' +
        '</td></tr>' +
        '<tr><td style="background:#f5f8fc;padding:14px 32px;font-size:12px;color:#8592a6">Sent from the Ascent Services website contact form.</td></tr>' +
      '</table></div>';

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
