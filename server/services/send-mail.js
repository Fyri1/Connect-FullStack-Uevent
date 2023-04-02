import nodemailer from 'nodemailer';
import getHtml from '../utils/get-html';
// import QArt from 'qartjs';

class SendMail {
  constructor() {
    this.from = 'usof.test1@gmail.com';
    this.password = 'madoasxztqtjarpn';
  }
  async send(to, data, type) {
    const { subject, html }  = getHtml[type](data);
    const mail = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
        user: this.from,
        pass: this.password,
      },
    });
    const mailOptions = {
      from: this.from,
      to,
      subject: massageEmail.subject,
      text: '',
      html: massageEmail.html,
    };
    const isReject = (await mail.sendMail(mailOptions)).rejected
    return isReject.length !== 0 ? isReject : 'Success';
  }
}

export default SendMail;
