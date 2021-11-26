export default async function handler(req, res) {
  let nodemailer = require("nodemailer");

  const { name, email, subject, message, mobile, type } = req.body;
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "email-smtp.ap-south-1.amazonaws.com",
    auth: {
      user: "AKIAQ7ISNVPZBKAGLNEP",
      pass: "BJ7dIQ2BXQxtSNNGmv+/BbpMbHCmJZNp4ybz78iBGc4V",
    },
    secure: true,
  });

  const mailData = {
    from: "theicpaglobal@gmail.com",
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
