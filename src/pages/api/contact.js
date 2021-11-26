export default async function handler(req, res) {
  let nodemailer = require("nodemailer");

  const { name, email, subject, message, mobile, type } = req.body;
  const transporter = nodemailer.createTransport({
    port: 465,
    host: `${process.env.SMTP_HOST}`,
    auth: {
      user: `${process.env.SMTP_USERNAME}`,
      pass: `${process.env.SMTP_PASSWORD}`,
    },
    secure: true,
  });

  const mailData = {
    from: `${process.env.EMAIL_FROM}`,
    to: "anand.k.rajneesh@gmail.com",
    subject: `ICPA Query From ${name}`,
    text: subject + " | Sent from: " + email,
    html: `<div><p>Name : ${name}</p><p>Email : ${email}</p><p>Contact Number : ${mobile}</p><p>Query Type : ${type}</p></div> <div>${message}</div>`,
  };

  try {
    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
        res.status(200).json({
          msg: "success",
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
