import prisma from "../../../libs/prisma";
import { getSession } from "next-auth/client";

export default async function handler(req, res) {
  const session = await getSession({ req });
  try {
    const courses = await prisma.orders.findMany({
      where: {
        email: session.user.email,
      },
      select: {
        courseId: true,
      },
    });

    let newArray = courses.map((el) => el.courseId);
    let courseArray = JSON.parse(newArray.toString());
    const result =
      await prisma.$queryRaw`SELECT * FROM "Courses" c where id in (${courseArray})`;

    res.status(200).json({
      msg: "success",
      data: result,
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
