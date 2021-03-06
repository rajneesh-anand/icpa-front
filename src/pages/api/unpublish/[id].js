import prisma from "@/libs/prisma";

// PUT /api/publish/:id
export default async function handle(req, res) {
  try {
    const postId = req.query.id;
    const post = await prisma.post.update({
      where: { id: Number(postId) },
      data: { published: false },
    });
    res.json(post);
  } catch (error) {
    res.status(500).send(error);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}
