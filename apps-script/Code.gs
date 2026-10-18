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

    const when = Utilities.formatDate(new Date(), 'Australia/Sydney', "EEE d MMM yyyy, h:mm a 'AEST/AEDT'");
    const service = clean_(d.service) || 'Not sure yet';
    const rows = [
      ['Full name', name],
      ['Company', company || '—'],
      ['Work email', email],
      ['Phone', clean_(d.phone) || '—'],
      ['Company size', clean_(d.companySize) || '—'],
      ['Service interested in', service],
      ['Submitted from', clean_(d.page) || '—'],
      ['Received', when],
    ];
    const message = clean_(d.requirement) || '(no message)';

    const text = 'NEW WEBSITE ENQUIRY\n\n' +
      rows.map(r => r[0] + ': ' + r[1]).join('\n') +
      '\n\nWhat they want to solve:\n' + message;

    const initials = name.split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase();
    const detailRows = rows.map((r, i) =>
      '<tr><td style="padding:14px 0;' + (i ? 'border-top:1px solid #e8edf5;' : '') + 'width:38%;font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:#7a869a;vertical-align:top">' + esc_(r[0]) + '</td>' +
      '<td style="padding:14px 0;' + (i ? 'border-top:1px solid #e8edf5;' : '') + 'font-size:15px;color:#0b1426;font-weight:600;word-break:break-word">' +
      (r[0] === 'Work email' ? '<a href="mailto:' + esc_(r[1]) + '" style="color:#0a7cff;text-decoration:none">' + esc_(r[1]) + '</a>' : esc_(r[1])) +
      '</td></tr>').join('');

    const html =
      '<div style="margin:0;padding:32px 12px;background:#eef2f8;font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Arial,sans-serif">' +
      '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;margin:0 auto">' +
        '<tr><td style="background:linear-gradient(135deg,#0b1426,#16284d);border-radius:20px 20px 0 0;padding:32px 36px">' +
          '<div style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#6ee7c8;font-weight:700">Ascent Services</div>' +
          '<div style="font-size:26px;line-height:1.25;color:#ffffff;font-weight:700;margin-top:10px">New website enquiry</div>' +
          '<div style="font-size:14px;color:#a9b6cf;margin-top:6px">' + esc_(when) + '</div>' +
        '</td></tr>' +
        '<tr><td style="background:#ffffff;padding:32px 36px">' +
          '<table role="presentation" cellspacing="0" cellpadding="0" style="margin-bottom:24px"><tr>' +
            '<td style="width:52px;height:52px;border-radius:26px;background:#0a7cff;color:#fff;text-align:center;font-weight:700;font-size:18px">' + esc_(initials) + '</td>' +
            '<td style="padding-left:14px"><div style="font-size:18px;font-weight:700;color:#0b1426">' + esc_(name) + '</div>' +
            '<div style="font-size:14px;color:#5b6679">' + esc_(company || email) + '</div></td>' +
          '</tr></table>' +
          '<table role="presentation" width="100%" cellspacing="0" cellpadding="0">' + detailRows + '</table>' +
          '<div style="margin-top:28px;padding:20px 22px;background:#f5f8fd;border-left:4px solid #0a7cff;border-radius:10px">' +
            '<div style="font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:#7a869a;margin-bottom:8px">What they want to solve</div>' +
            '<div style="font-size:15px;line-height:1.65;color:#0b1426;white-space:pre-wrap">' + esc_(message) + '</div>' +
          '</div>' +
          '<div style="margin-top:28px"><a href="mailto:' + esc_(email) + '?subject=' + encodeURIComponent('Re: Your enquiry to Ascent Services') + '" ' +
            'style="display:inline-block;background:#0a7cff;color:#ffffff;text-decoration:none;font-weight:600;font-size:15px;padding:13px 26px;border-radius:999px">Reply to ' + esc_(name.split(' ')[0]) + ' &rarr;</a></div>' +
        '</td></tr>' +
        '<tr><td style="background:#f5f8fd;border-radius:0 0 20px 20px;padding:18px 36px;font-size:12px;color:#7a869a">' +
          'Sent automatically from the Ascent Services website contact form. Hitting Reply also answers the enquirer.' +
        '</td></tr>' +
      '</table></div>';

    MailApp.sendEmail({
      to: TO_EMAIL,
      replyTo: email,                       // hitting Reply answers the enquirer
      subject: 'New enquiry: ' + name + (company ? ' (' + company + ')' : '') + ' · ' + service,
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
