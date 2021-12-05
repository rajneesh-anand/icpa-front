import React, { useState, useEffect } from "react";
import About from "@/components/About";
import Seo from "@/components/Seo";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";
import YoutubeLink from "@/components/Youtube";
import PartnerPage from "@/components/Partner";
import HomeContactPage from "@/components/Home/Contact";

const AboutPage = ({ result }) => {
  return (
    <Layout>
      <Seo
        title="About ICPA | ICPA Global Consultants"
        description="Online Seller Services | ICPA Global Consultant is one stop solution for setting up an online store on various platforms i.e ( Amazon , Flipkart , Meesho , Shopsy ). We have years of expertise in online seller consultancy"
        canonical={`${process.env.PUBLIC_URL}/about`}
      />
      <Header />
      <About data={result} />
      <YoutubeLink />
      <PartnerPage />
      <HomeContactPage />
      <Footer />
    </Layout>
  );
};

export default AboutPage;

export async function getServerSideProps() {
  const response = await fetch(`${process.env.API_URL}/upload/about`);
  const data = await response.json();

  return {
    props: { result: data ? data : null },
  };
}
