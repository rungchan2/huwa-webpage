// import sgMail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';
import {SENDGRID_API_KEY} from '../../config/index';
const sgMail = require('@sendgrid/mail');

export default async function SendEmail(req: NextApiRequest, res: NextApiResponse) {
  sgMail.setApiKey(SENDGRID_API_KEY);
  console.log('SENDGRID_API_KEY 에이피아이', SENDGRID_API_KEY);

  const { subject, company, description, email, name, contact, url, referenceSite, meeting } = req.body;
  const referer = req.headers.referer;

  const content = {
    to: email,
    from: 'leeh09077@gmail.com',
    subject: subject || 'No subject',
    text: description,
    html: `<div>
    <h1>Name: ${name}</h1>
    <h1>E-mail: ${email}</h1>
    <p>설명${description}</p>
    <p>회사${company}</p>
    <p>연락처${contact}</p>
    <p>url${url}</p>
    <p>레퍼런스 URL${referenceSite}</p>
    <p>미팅 여부${meeting}</p>
    <p>Sent from: ${referer || 'Not specified or hidden'}`,
  };

  try {
    await sgMail.send(content);
    res.status(204).end();
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send({ message: error });
  }
}
