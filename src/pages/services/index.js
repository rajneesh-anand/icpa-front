import React from "react";
import IntroVideo from "@/components/IntroVideo";
import KeyFeatures from "@/components/KeyFeatures";
import FreeTrial from "@/components/FreeTrial";
import Partner from "@/components/Partner";
import Seo from "@/components/Seo";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";

const ServicePage = ({ services }) => {
  return (
    <Layout>
      <Seo
        title="Services | ICPA Global Consultants"
        description="This is home"
        canonical={`${process.env.PUBLIC_URL}/services`}
      />
      <Header />
      <IntroVideo />
      <KeyFeatures />
      <FreeTrial />
      <Partner />
      <Footer />
    </Layout>
  );
};

export default ServicePage;

export async function getServerSideProps() {
  const result = await fetch(`${process.env.API_URL}/awsupload/fetchObject`);
  const data = await result.json();

  return {
    props: { banner: data ? data.data : null },
  };
}
