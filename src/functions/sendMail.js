import sgMail from '@sendgrid/mail';
import response from './utility/response';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function handler(event) {
  const payload = JSON.parse(event.body);

  const message = {
    to: payload.to,
    from: 'jadranko.dragoje@gmail.com',
    subject: 'Sending e-mail with SendGrid and Netlify',
    text: 'This is easy to do and it just works',
    html: 'This is easy to do and it <strong>just works</strong>',
  };

  sgMail.send(message);

  return {
    statusCode: 200,
    headers: response.getCommonHeaders(),
    body: JSON.stringify({
      message,
    }),
  };
}
