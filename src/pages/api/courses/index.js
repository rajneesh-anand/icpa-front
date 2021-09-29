import prisma from "../../../libs/prisma";
import { getSession } from "next-auth/client";

export default async function handler(req, res) {
  try {
    const session = await getSession({ req });
    const orders = await prisma.orders.findMany({
      where: {
        email: session?.user?.email,
      },
      select: {
        courseId: true,
      },
    });

    let newArray = orders.map((el) => el.courseId);
    let courseIdList = newArray.filter((x) => x).join(",");

    const result = await prisma.$queryRaw(
      `select * from "Courses" where id in (${courseIdList})`
    );

    console.log(result);
    res.status(200).json({
      data: result,
      msg: "success",
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
