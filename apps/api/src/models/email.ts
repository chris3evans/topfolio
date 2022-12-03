import { environment } from '../environments/environment'
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: environment.email,
    pass: environment.password
  }
});

async function sendHelp(name: string, email : string, title : string, body: string, target: string) {
  
  const mailOptions = {
    from: environment.email,
    to: target,
    subject: "Topfolio contact me request",
    html: `<h1>Email recived from: ${name} </h1> <h2> subect: ${title} </h2><h3> body: ${body} </h3> <h4> return email: ${email} </h4>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })

}




export = { sendHelp }