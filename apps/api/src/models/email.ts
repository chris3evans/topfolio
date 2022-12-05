import { environment } from '../environments/environment';
const nodemailer = require('nodemailer');
const sanitizer = require('sanitize')();

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
  // TODO SANITIZE

  const safeName = sanitizer.value(name, 'string');
  const safeEmail = sanitizer.value(email, 'string');
  const safeTitle = sanitizer.value(title, 'string');
  const safeBody = sanitizer.value(body, 'string');
  const safeTarget = sanitizer.value(target, 'string');

  const mailOptions = {
    from: environment.email,
    to: safeTarget,
    subject: 'Topfolio contact me request',
    html: `<h1>Email recived from: ${safeName} </h1> <h2> subect: ${safeTitle} </h2><h3> body: ${safeBody} </h3> <h4> return email: ${safeEmail} </h4>`,
  };
  try {
    const res = await transporter.sendMail(mailOptions);
    return res;
  } catch (error) {
    return error;
  }
}

export = { sendHelp };
