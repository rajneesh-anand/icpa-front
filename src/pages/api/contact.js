import sgMail from "@sendgrid/mail";
sgMail.setApiKey(`${process.env.SENDGRID_API_KEY}`);

export default async (req, res) => {
  const { email, subject, message, name, mobile } = req.body;

  const msg = {
    to: email,
    from: "osho.ved@hotmail.com",
    subject: subject,
    text: "and easy to do anywhere, even with Node.js",
    html: `<strong>${message} - ${name} - ${mobile}</strong>`,
  };

  try {
    const response = await sgMail.send(msg);
    const result = response[0].statusCode;
    if (result === 202) {
      res.status(200).json({ message: "success" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "failed" });
  }
};
