import React, { useState, useEffect } from "react";
import IntroVideo from "@/components/IntroVideo";
import Consultancy from "@/components/Consultancy";
import FreeTrial from "@/components/FreeTrial";
import Partner from "@/components/Partner";
import Seo from "@/components/Seo";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";
import ModalForm from "@/components/ModalForm";

const TelephonicPage = () => {
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
        title="ICPA Global Consultants | Telephonic Consultation"
        description="Amazon Flipkart Other E-Commerce Platform Seller | Telephonic Consultation"
        canonical={`${process.env.PUBLIC_URL}/telephonic-consultation`}
      />
      <Header />
      {/* <IntroVideo /> */}
      <Consultancy />
      <FreeTrial />
      <Partner />
      <ModalForm show={show} handleClose={handleClose} />
      <Footer />
    </Layout>
  );
};

export default TelephonicPage;
