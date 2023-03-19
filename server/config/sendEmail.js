const nodemailer = require("nodemailer");

const sendEmail = async function (email, subject, text) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "info.classrate@gmail.com",
      pass: `${process.env.EMAIL_PWD}`,
    },
  });

  let info = await transporter.sendMail({
    from: "'ClassRate Team' <ClassRate@ml>",
    to: `${email}`,
    subject: `${subject}`,
    text: `${text}`,
  });
};

module.exports = sendEmail;
