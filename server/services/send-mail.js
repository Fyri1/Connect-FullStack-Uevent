import nodemailer from 'nodemailer';
// import QArt from 'qartjs';

class SendMail {
  constructor() {
    this.from = 'usof.test1@gmail.com';
    this.password = 'madoasxztqtjarpn';
    this.origin = 'http://localhost:8080/';
  }
  send(to, uuid, type) {
    const massageEmail = {};
    switch (type) {
      case 'activate':
        {
          massageEmail.subject = 'Activate email Link - usof-backend.com';
          massageEmail.html = `
       <div>
            <p>
                Thank you for registering, for confirmation  email follow the
                    <a href="${this.origin}api/auth/confirm-email/${uuid}">
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
                <a href="${this.origin}reset-password/${uuid}">link</a>
            </p>
        </div>
        `;
        }
        break;
      case 'ticket':
        {
          // const qart = new QArt({
          //   value: value,
          //   imagePath: './example.png',
          //   filter: filter,
          //   size: 195,
          // });
          massageEmail.subject = 'Reset password link - usof-backend.com';
          massageEmail.html = `
        <div>
            <p>
                You requested for reset password, kindly use this to reset your password
                <a href="${this.origin}reset-password/${uuid}">link</a>
            </p>
        </div>
        <div class="qart"></div>
        <script src="//cdnjs.cloudflare.com/ajax/libs/qartjs/1.0.2/qart.min.js"></script>
        <script>
          new QArt({
            value: ${uuid},
            size: 195
	        }).make(document.getElementById('qart'));
        </script>
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
    return mail.sendMail(mailOptions);
  }
}

export default SendMail;
