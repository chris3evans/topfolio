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
  // TODO SANITIZE

  const mailOptions = {
    from: environment.email,
    to: target,
    subject: 'Topfolio contact me request',
    html: `
    <div style="width: 100%; height: 100%; background-color: white">
    <img src="logo" alt="Logo">
<div style="border: 0px solid; margin: auto; width: fit-content; padding: 10%; text-align: center; background-color: WhiteSmoke; color: black; border-radius: 10%;">
    <h1>Email recived from: ${name} at ${email}</h1>
     <h2> Subect: ${title} </h2>
     <h3> Body: ${body} </h3> 
     </div>
     </div>
    `
  };
  try {
    const res = await transporter.sendMail(mailOptions);
    return res;
  } catch (error) {
    return error;
  }
}

export = { sendHelp };
