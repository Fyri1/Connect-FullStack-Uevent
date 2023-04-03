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
          massageEmail.html = `<html lang="en">
          <head>
            <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
          </head>
          <body
            style="
              background-color: rgb(255, 255, 255);
              font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
                'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
                'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
                'Noto Color Emoji';
                padding-left: 20rem;
                padding-right:20rem;
                
            "
          >
            <section style="">
              <div
                style="
                "
              >
                <div
                  style="
                    position: relative;
                    margin-bottom: 20rem;
                   
                    display: flex;
                    width: 100%;
                
                    flex-direction: column;
                    overflow-wrap: break-word;
                    border-radius: 0.5rem;
                    background-color: rgb(255, 255, 255);
                    box-shadow: 0 0 #0000, 0 0 #0000, 0 20px 25px -5px rgb(0, 0, 0, 0.1),
                      0 8px 10px -6px rgb(0, 0, 0, 0.1);
                  "
                >
                  <div style="padding-left: 1.5rem; padding-right: 1.5rem">
                    <div
                      style="display: flex; flex-wrap: wrap; justify-content: center"
                    >
                      <div style="flex-wrap: wrap">
                        <div class="">
                          <img
                            src="https://i.imgur.com/FQS7fFC.png"
                            alt="step"
                            style="
                              margin-left: auto;
                              margin-right: auto;
                              margin-top: 5rem;
                              height: 20rem;
                              width: 20rem;
                              border:solid #7a7777; /* Ширина,  стиль и цвет рамки */
                              border-width: 0.5px;
                              padding: 0.5rem;
                              border-radius: 15px;
                            "
                          />
                          <div>
                            <p
                              style="
                            margin-top: 0.5rem; 
                            color: #4B5563; 
                            font-weight: 600; 
                            text-align: center; 
        
                              "
                            >
                              #KON4AVPIZDE
                            </p>
                            <p
                              style="
                            margin-top: 0.25rem; 
                            color: #EF4444; 
                            font-weight: 500; 
                            text-align: center; 
                              "
                            >
                              040-12-00-01166166-001
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style="
                          margin-top: 3rem;
                          text-align: center;
                                ">
                      <p
                        style="
                          margin-bottom: 0.5rem;
                          font-size: 1.25rem;
                          line-height: 1.5;
                          font-weight: 600;
                          color: rgb(29, 78, 216);
                        "
                      >
                        Jenna Stones
                      </p>
                      
                      <div style="
                            display: inline-block;    
                        ">
                      <div
                        style="
                          margin-left:50px;
                          margin-bottom: 0.5rem;
                          margin-top: 0px;
                          font-size: 0.875rem;
                          line-height: 0.1;
                          font-weight: 700;
                          text-transform: uppercase;
                          color: rgb(96, 165, 250);
                          display: flex;
                               
                        "
                      >
                          <div style="
        
                            display: inline-block;
                            height: 1.5rem;
                            width: 1.5rem;">
                            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                              <path clip-rule="evenodd" fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"></path>
                            </svg>
                          </div>
        
                          <p>Los Angeles, California</p>
                      </div>
                      <div style="
                            margin-bottom: 0.5rem;
                            line-height: 0.1;
                            font-weight: 600;
                            color: rgb(37, 99, 235);
                            display: flex;
                            ">
                          <div style="
                            display: inline-block;
                            height: 1.5rem;
                            width: 1.5rem;">
                            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                              <path clip-rule="evenodd" fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"></path>
                            </svg>
                          </div>
                        <p>Solution Manager - Creative Tim Officer</p>
                      </div>
                      <div style="
                            margin-left:20px;
                            margin-bottom: 0.5rem;
                            line-height: 0.1;
                            font-weight: 600;
                            color: rgb(37, 99, 235);
                            display: flex;
                            ">
                          <div style="
                            display: inline-block;
                            height: 1.5rem;
                            width: 1.5rem;">
                            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                              <path clip-rule="evenodd" fill-rule="evenodd" d="M9.674 2.075a.75.75 0 01.652 0l7.25 3.5A.75.75 0 0117 6.957V16.5h.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H3V6.957a.75.75 0 01-.576-1.382l7.25-3.5zM11 6a1 1 0 11-2 0 1 1 0 012 0zM7.5 9.75a.75.75 0 00-1.5 0v5.5a.75.75 0 001.5 0v-5.5zm3.25 0a.75.75 0 00-1.5 0v5.5a.75.75 0 001.5 0v-5.5zm3.25 0a.75.75 0 00-1.5 0v5.5a.75.75 0 001.5 0v-5.5z"></path>
                            </svg>
                          </div>
                        <p>University of Computer Science</p>
                      </div>
                      </div>
                    </div>
                    
                    
                    
                    <div
                      style="
                        margin-top: 2rem;
                        border-top-width: 1px;
                        border-color: rgb(191, 219, 254);
                        padding-top: 2rem;
                        padding-bottom: 2rem;
                        text-align: center;
                      "
                    >
                       <p
                          style="
                            text-align: center;
                            font-size: 1.25rem;
                            line-height: 1.75rem;
                            font-weight: 700;
                          "
                        >
                          Time
                        </p> 
                      <div
                        style="display: flex; flex-wrap: wrap; justify-content: center"
                      >
        
                        <div
                          style="
                            border-bottom-right-radius: 0.25rem;
                            border-bottom-left-radius: 0.25rem;
                            background-color: rgb(249, 250, 251);
                            padding-left: 1.25rem;
                            padding-right: 1.25rem;
                            padding-top: 1.25rem;
                            padding-bottom: 1.25rem;
                          "
                        >
                          
                          <div style="padding-left: 1rem; padding-right: 1rem
                                      ">
                            <div
                              style="
                              width: 280px;
                              height: 100px;
                              border-bottom:2px dashed  #888B8B;
                              "
                            >
                              <p
                                style="
                                  font-size: 0.75rem;
                                  line-height: 0.75rem;
                                  font-weight: 300;
                                "
                              >
                                9:00 AM
                              </p>
                              <a
                                tabindex="0"
                                style="
                                  margin-top: 0.5rem;
                                  font-size: 1.125rem;
                                  line-height: 1.25rem;
                                  font-weight: 500;
                                  color: rgb(31, 41, 55);
                                "
                                >Zoom call with design team</a
                              >
                              <p
                                style="
                                  padding-top: 0.5rem;
                                  font-size: 0.875rem;
                                  line-height: 1;
                                  color: rgb(75, 85, 99);
                                "
                              >
                                Discussion on UX sprint and Wireframe review
                              </p>
                            </div>
                            <div
                              style="
                              width: 280px;
                              height: 100px;
                              border-bottom:2px dashed  #888B8B;
                              "
                            >
                              <p
                                style="
                                  font-size: 0.75rem;
                                  line-height: 0.75rem;
                                  font-weight: 300;
                                  color: rgb(107, 114, 128);
                                "
                              >
                                10:00 AM
                              </p>
                              <a
                                tabindex="0"
                                style="
                                  margin-top: 0.5rem;
                                  font-size: 1.125rem;
                                  line-height: 1.25rem;
                                  font-weight: 500;
                                  color: rgb(31, 41, 55);
                                "
                                >Orientation session with new hires</a
                              >
                            </div>
                            <div
                              style="
                              width: 280px;
                              height: 100px;
                              border-bottom:2px dashed  #888B8B;
                              "
                            >
                              <p
                                style="
                                  font-size: 0.75rem;
                                  line-height: 0.75rem;
                                  font-weight: 300;
                                  color: rgb(107, 114, 128);
                                "
                              >
                                9:00 AM
                              </p>
                              <a
                                tabindex="0"
                                style="
                                  margin-top: 0.5rem;
                                  font-size: 1.125rem;
                                  line-height: 1.25rem;
                                  font-weight: 500;
                                  color: rgb(31, 41, 55);
                                "
                                >Zoom call with design team</a
                              >
                              <p
                                style="
                                  padding-top: 0.5rem;
                                  font-size: 0.875rem;
                                  line-height: 1;
                                  color: rgb(75, 85, 99);
                                "
                              >
                                Discussion on UX sprint and Wireframe review
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </body>
        </html>
        `;

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
