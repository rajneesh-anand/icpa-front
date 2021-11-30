import React, { useState, useEffect } from "react";
import IntroVideo from "@/components/IntroVideo";

import Partner from "@/components/Partner";
import Seo from "@/components/Seo";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";
import Loading from "@/components/Loading";
import ModalForm from "@/components/ModalForm";

import YoutubeLink from "@/components/Youtube";

const FranchisePage = () => {
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
        title="Franchise | ICPA Global Consultants"
        description="Join ICPA as a franchise partner| ICPA Global Consultant is one stop solution for setting up an online store on various platforms i.e ( Amazon , Flipkart , Meesho , Shopsy ). We have years of expertise in online seller consultancy"
        canonical={`${process.env.PUBLIC_URL}/franchise`}
      />
      <Header />
      <IntroVideo />
      <YoutubeLink />

      <Partner />
      <ModalForm show={show} handleClose={handleClose} />
      <Footer />
    </Layout>
  );
};

export default FranchisePage;
