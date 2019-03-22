import * as functions from 'firebase-functions';
import * as mailgunJs from 'mailgun-js';

export function sendContactMailConfirmation(request: any) {
  const mailgun = mailgunJs({
    apiKey: functions.config().mailgun.api_key,
    domain: functions.config().mailgun.domain
  });

  const subject =
    request.locale === 'de'
      ? 'Vielen Dank für Ihre Kontaktanfrage.'
      : 'Thank you for your contact request.';

  const msgBody =
    request.locale === 'de'
      ? `${request.name},\n\n` +
        `Vielen Dank für Ihre Kontaktanfrage. ` +
        `Ich haben Ihre Nachricht erhalten und werde mich sobald wie möglich bei Ihnen zurückmelden.\n\n` +
        `Mit freundlichen Grüßen,\n` +
        `Martin Reiche\n\n` +
        `--\n` +
        `Dr. Martin Reiche\n` +
        `Full Stack Web Developer\n` +
        `martin@reiche.dev\n` +
        `martinreiche.dev\n`
      : `${request.name},\n\n` +
        `thank you very much for yout contact request. ` +
        `I received the message you have sent me. I will reply as soon as possible.\n\n` +
        `Kind regards,\n` +
        `Martin Reiche\n\n` +
        `--\n` +
        `Martin Reiche, PhD \n` +
        `Full Stack Web Developer\n` +
        `martin@reiche.dev\n` +
        `martinreiche.dev\n`;

  const data = {
    from: functions.config().mailgun.from_address,
    to: request.email,
    bcc: functions.config().mailgun.bcc_address,
    subject,
    text: msgBody
  };

  return new Promise((resolve, reject) => {
    return mailgun.messages().send(data, function(error, body) {
      if (error) reject(error);
      else resolve();
    });
  });
}

export default sendContactMailConfirmation;
