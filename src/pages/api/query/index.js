import prisma from "@/libs/prisma";

export default async function handler(req, res) {
  const { name, email, contact, interest, location } = req.body;

  switch (req.method) {
    case "GET":
      break;
    case "POST":
      try {
        const result = await prisma.queries.create({
          data: {
            name: name,
            email: email,
            contact: contact,
            location: locatio,
            interested: interest,
          },
        });

        res.status(200).json({
          msg: "success",
          result: result,
        });
      } catch (error) {
        console.log(error);
        res.status(500).send(error);
      } finally {
        async () => {
          await prisma.$disconnect();
        };
      }
      break;
    default:
      res.status(405).end();
      break;
  }
}
