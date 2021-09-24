import prisma from "../../../libs/prisma";

export default async function handler(req, res) {
  const {
    name,
    email,
    phone,
    sellerType,
    companyType,
    monthlySale,
    interestedIn,
    talkTimePackage,
    scheduledCallDate,
    comment,
  } = req.body;

  try {
    const result = await prisma.telconsultations.create({
      data: {
        name: name,
        email: email,
        phone: phone,
        sellerType: sellerType,
        companyType: companyType,
        monthlySale: monthlySale,
        interestedIn: interestedIn,
        talkTimePackage: talkTimePackage,
        scheduledCallDate: scheduledCallDate,
        comment: comment,
      },
    });

    return res.status(200).json({
      msg: "success",
      data: result,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}
