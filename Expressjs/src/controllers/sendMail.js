const nodemailer = require("nodemailer");

const sendMail = async(req, res) => {
    //connect with smtp server
    const transporter = await nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'julianne.greenholt@ethereal.email',
    pass: 'AEUhygyfZtN1VtTJpa'
  }
});

const info = await transporter.sendMail({
    from: '"Anamika Mall 👻" <anamika@gmail.com>', // sender address
    to: "ashishrajmallsrk123@gmail.com", // list of receivers
    subject: "Hello Anna", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
 
  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

module.exports = sendMail ;