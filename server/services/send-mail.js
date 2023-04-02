import nodemailer from 'nodemailer';
// import QArt from 'qartjs';

class SendMail {
  constructor() {
    this.from = 'usof.test1@gmail.com';
    this.password = 'madoasxztqtjarpn';
    this.origin = 'http://localhost:8080/';
  }
  async send(to, data, type) {
    const massageEmail = {};
    switch (type) {
      case 'activate':
        {
          massageEmail.subject = 'Activate email Link - usof-backend.com';
          massageEmail.html = `
       <div>
            <p>
                Thank you for registering, for confirmation  email follow the
                    <a href="${this.origin}api/auth/confirm-email/${data.uuid}">
                    link
                    </a>
            </p>
        </div>
        `;
        }
        break;
      case 'reset':
        {
          massageEmail.subject = 'Reset password link - usof-backend.com';
          massageEmail.html = `
        <div>
            <p>
                You requested for reset password, kindly use this to reset your password
                <a href="${this.origin}reset-password/${data.uuid}">link</a>
            </p>
        </div>
        `;
        }
        break;
      case 'ticket':
        {
          massageEmail.subject = 'Thanks for buying the ticket';
          massageEmail.html = "" // <-- сюда свою html страницу
          // <p>${data.name} - ${data.price} - ${new Date()}</p>
        }
        break;
      case 'code':
        {
          massageEmail.subject = 'Activate email code - usof-backend.com';
          massageEmail.html = `
         <div>
              <p>
              You have submitted an email change request to this email address, please enter a 6-digit code to confirm
              </p>
              <p align="center" style="
              font-size: 40px;
          "><b>${data.uuid
            .split('')
            .map((item, i) => {
              if (i === 3) {
                return ` ${item}`;
              }
              return item;
            })
            .join('')}</b></p>
          </div>
          `;
        }
        break;
      default:
        throw new Error(`undefined type - ${type} massage`);
    }

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
