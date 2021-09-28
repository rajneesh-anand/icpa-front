import React, { useState, useEffect } from "react";
import BlogList from "@/components/Blog/blog-list";
import FreeTrial from "@/components/FreeTrial";
import Partner from "@/components/Partner";
import Seo from "@/components/Seo";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";
import BlogDetail from "@/components/Blog/blog-details";

const SingleBlogPage = ({ data }) => {
  const blog = JSON.parse(data);
  return (
    <Layout>
      <Seo
        title={`${blog.title}`}
        description="Amazon Flipkart Other E-Commerce Seller Platforms News and Updates"
        canonical={`${process.env.PUBLIC_URL}/blog/${blog.slug}`}
      />
      <Header />
      <BlogDetail data={blog} />
      <Partner />
      <Footer />
    </Layout>
  );
};

export default SingleBlogPage;

export async function getServerSideProps({ params, req, res }) {
  try {
    const { slug } = params;
    const post = await prisma.post.findFirst({
      where: {
        slug: slug,
      },
      include: {
        author: {
          select: { name: true, image: true },
        },
      },
    });

    return {
      props: { data: JSON.stringify(post) },
    };
  } catch (error) {
    res.statusCode = 404;
    return {
      props: {},
    };
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}
