import React, { useState, useEffect } from "react";
import Banner from "@/components/Banner";
import Partner from "@/components/Partner";
import ModalForm from "@/components/ModalForm";
import Seo from "@/components/Seo";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";
import ClientFeedback from "@/components/Feedback";
import HomeBlogPage from "@/components/HomeBlogPage";
import HomeServicesPage from "@/components/Home/Services";
import HomeCoursePage from "@/components/Home/Courses";
import YoutubeLink from "@/components/Youtube";
import HomeContactPage from "@/components/Home/Contact";
import ProjectsPage from "@/components/Home/Projects";
// import AwardsPage from "@/components/Home/Awards";
import MembershipPage from "@/components/MembershipPlan";

const HomePage = () => {
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
        description="ICPA Global Consultant is one stop solution for setting up an online store on various platforms i.e ( Amazon , Flipkart , Meesho , Shopsy ). We have years of expertise in online seller consultancy"
        canonical={`${process.env.PUBLIC_URL}`}
      />
      <Header />
      <Banner />
      <HomeServicesPage />
      <HomeCoursePage />
      {/* <MembershipPage /> */}
      <ProjectsPage />
      {/* <AwardsPage /> */}
      <ClientFeedback />
      <HomeBlogPage />
      <YoutubeLink />
      <Partner />
      <HomeContactPage />
      <ModalForm show={show} handleClose={handleClose} />
      <Footer />
    </Layout>
  );
};

export default HomePage;
