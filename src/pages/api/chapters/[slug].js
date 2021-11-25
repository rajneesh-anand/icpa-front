import prisma from "@/libs/prisma";

export default async function handler(req, res) {
  const slug = req.query.slug;
  console.log(`object`);
  console.log(slug);
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
