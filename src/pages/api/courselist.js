import prisma from "@/libs/prisma";

export default async function handler(req, res) {
  try {
    const courses = await prisma.courses.findMany({
      where: {
        status: true,
      },
      orderBy: [
        {
          id: "asc",
        },
      ],
    });

    res.status(200).json({
      data: courses,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}
