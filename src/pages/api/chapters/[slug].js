import prisma from "@/libs/prisma";

import Cors from "cors";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  const slug = req.query.slug;
  await runMiddleware(req, res, cors);
  try {
    const course = await prisma.coursemedia.findMany({
      where: {
        course: { slug: slug },
      },
    });

    console.log(course);
    res.status(200).json({
      data: course,
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
