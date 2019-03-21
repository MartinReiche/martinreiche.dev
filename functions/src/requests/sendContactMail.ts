import * as functions from 'firebase-functions';
import * as mailgunJs from 'mailgun-js';

export function sendContactMail(request: any) {
  const mailgun = mailgunJs({
    apiKey: functions.config().mailgun.api_key,
    domain: functions.config().mailgun.domain
  });

  const subject = `Kontaktanfrage von ${request.name} (${request.email})`;
  const files = request.urls
    ? `\n\nAnhang:\n\n${request.urls.join('\n\n')}\n\n`
    : '';
  const msgBody =
    `Neue Kontaktanfrage von ${request.name}\n` +
    `Email: ${request.email}\n\n` +
    `Nachricht:\n\n` +
    `${request.body}\n\n` +
    `${files}`;

  const data = {
    from: functions.config().mailgun.from_address,
    to: functions.config().mailgun.bcc_address,
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

export default sendContactMail;
