import React, { useState, useEffect } from "react";
import NavbarStyleTwo from "@/components/_App/NavbarStyleTwo";
import Banner from "@/components/Banner";
import Features from "@/components/HomeDemo2/Features";
import KeyFeatures from "@/components/HomeDemo2/KeyFeatures";
import AppProgressStyle2 from "@/components/Common/AppProgressStyle2";
import IntroVideo from "@/components/HomeDemo2/IntroVideo";
import AppScreenshotsStyle2 from "@/components/AppScreenshots/AppScreenshotsStyle2";
import SoftwareIntegrationsTwo from "@/components/Common/SoftwareIntegrationsTwo";
import ClientFeedbackStyle2 from "@/components/Feedbacks/ClientFeedbackStyle2";
import ClientFeedbackStyle1 from "@/components/Feedbacks/ClientFeedbackStyle1";
import MembershipPlan from "@/components/MembershipPlan";
import FreeTrialStyle2 from "@/components/Common/FreeTrialStyle2";
import PartnerStyle1 from "@/components/Common/PartnerStyle1";
import FooterStyleOne from "@/components/_App/FooterStyleOne";
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
      <IntroVideo />
      <AppProgressStyle2 />
      <KeyFeatures />
      <MembershipPlan />
      <AppScreenshotsStyle2 />
      <SoftwareIntegrationsTwo />
      <ClientFeedbackStyle1 />
      <FreeTrialStyle2 />
      <PartnerStyle1 />
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
