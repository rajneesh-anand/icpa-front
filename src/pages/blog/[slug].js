import React, { useState, useEffect } from "react";
import Partner from "@/components/Partner";
import Seo from "@/components/Seo";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";
import BlogDetail from "@/components/Blog/blog-details";

const SingleBlogPage = ({ result }) => {
  return (
    <Layout>
      <Seo
        title={`${result.title}`}
        description="Amazon Flipkart Other E-Commerce Seller Platforms News and Updates"
        canonical={`${process.env.PUBLIC_URL}/blog/${result.slug}`}
      />
      <Header />
      <BlogDetail data={result} />
      <Partner />
      <Footer />
    </Layout>
  );
};

export default SingleBlogPage;

export async function getServerSideProps({ params, req, res }) {
  const { slug } = params;
  const result = await fetch(`${process.env.PUBLIC_URL}/api/blog/${slug}`);
  const data = await result.json();
  return {
    props: { result: data ? data.data : null },
  };
}
