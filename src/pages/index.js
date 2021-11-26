import React, { useState, useEffect } from "react";
import Banner from "@/components/Banner";
import Partner from "@/components/Partner";
import ModalForm from "@/components/ModalForm";
import Seo from "@/components/Seo";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";

const HomePage = ({ banner }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 5000);
  }, []);

  return (
    <Layout>
      <Seo
        title="Home | ICPA Global Consultants"
        description="This is home"
        canonical={`${process.env.PUBLIC_URL}`}
      />
      <Header />
      <Banner data={banner} />
      {/* <AboutBrief />
      <AppProgressStyle2 />
      <KeyFeatures />
      <MembershipPlan />
      <AppScreenshotsStyle2 />
      <SoftwareIntegrationsTwo />
      <ClientFeedbackStyle1 /> */}

      <Partner />
      <ModalForm show={show} handleClose={handleClose} />
      <Footer />
    </Layout>
  );
};

export default HomePage;

export async function getServerSideProps() {
  const result = await fetch(`${process.env.API_URL}/awsupload/fetchObject`);
  const data = await result.json();

  return {
    props: { banner: data ? data.data : null },
  };
}
