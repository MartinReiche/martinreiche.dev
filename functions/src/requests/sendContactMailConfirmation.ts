import * as functions from 'firebase-functions';
import * as mailgunJs from 'mailgun-js';

export function sendContactMailConfirmation(request: any) {
  const mailgun = mailgunJs({
    apiKey: functions.config().mailgun.api_key,
    domain: functions.config().mailgun.domain
  });

  const subject =
    request.locale === 'de'
      ? 'Deine Kontaktanfrage an subucoola'
      : 'Your contact request to subucoola';

  const msgBody =
    request.locale === 'de'
      ? `Hallo ${request.name},\n\n` +
        `wir haben deine Nachricht vom Kontaktformular erhalten und werden uns sobald wie möglich zurückmelden.\n\n` +
        `Bis dahin,\n` +
        `sonnigste Grüße vom Subucoola Team`
      : `Hi ${request.name},\n\n` +
        `we received the message you've sent via our contact form and will answer as soon as possible.\n\n` +
        `All the best,\nyour Subucoola Team!`;

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
