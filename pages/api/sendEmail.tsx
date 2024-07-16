// import sgMail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';
import {SENDGRID_API_KEY} from '../../config/index';

const sgMail = require('@sendgrid/mail');

export default async function SendEmail(req: NextApiRequest, res: NextApiResponse) {
  sgMail.setApiKey(SENDGRID_API_KEY);
  console.log('SENDGRID_API_KEY 에이피아이', SENDGRID_API_KEY);

  const { subject, company, description, name, contact, url, referenceSite, meeting, service } = req.body;
  const referer = req.headers.referer;

  const contentTest = {
    to: 'leeheechan0907@gmail.com',
    from: 'leeheechan0907@gmail.com',
    subject: `새로운 신청자 : ${name}`,
    text: 'Hello plain world!',
    html: `<h1>Name: ${name}</h1>
    <h1>Name : ${name}</h1>
    <p>설명 : ${description}</p>
    <p>신청 서비스 : ${service}</p>
    <p>회사 : ${company}</p>
    <p>연락처 : ${contact}</p>
    <p>url : ${url}</p>
    <p>레퍼런스 URL : ${referenceSite}</p>
    <p>미팅 여부 : ${meeting}</p>`,
  };

  console.log('메일 내용들 : ', contentTest);

  try {
    await sgMail.send(contentTest);
    res.status(204).end();
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send({ message: error });
  }
}
