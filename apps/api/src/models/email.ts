import { environment } from '../environments/environment';
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: environment.email,
    pass: environment.password,
  },
});

async function sendHelp(
  name: string,
  email: string,
  title: string,
  body: string,
  target: string
) {
  const mailOptions = {
    from: environment.email,
    to: target,
    subject: 'Topfolio contact me request',
    html: `<h1>Email recived from: ${name} </h1> <h2> subect: ${title} </h2><h3> body: ${body} </h3> <h4> return email: ${email} </h4>`,
  };
  try {
    const res = await transporter.sendMail(mailOptions);
    return res;
  } catch (error) {
    return error;
  }
}

export = { sendHelp };
