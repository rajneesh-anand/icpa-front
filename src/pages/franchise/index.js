import React, { useState, useEffect } from "react";
import IntroVideo from "@/components/IntroVideo";
import KeyFeatures from "@/components/KeyFeatures";
import FreeTrial from "@/components/FreeTrial";
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
        title="ICPA Global Consultants | Franchise Opportunity"
        description="Amazon Flipkart Seller Account Management | Brand Registry | FBA Services"
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
