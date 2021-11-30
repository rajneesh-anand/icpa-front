import React, { useState, useEffect } from "react";
import IntroVideo from "@/components/IntroVideo";
import Consultancy from "@/components/Consultancy";
import prisma from "@/libs/prisma";
import Partner from "@/components/Partner";
import Seo from "@/components/Seo";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";
import ModalForm from "@/components/ModalForm";

const TelephonicPage = ({ faqData }) => {
  const faq = faqData ? JSON.parse(faqData) : [];
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
        title="Telephonic Consultation | ICPA Global Consultants"
        description="Get Telephonic Consultation | ICPA Global Consultant is one stop solution for setting up an online store on various platforms i.e ( Amazon , Flipkart , Meesho , Shopsy ). We have years of expertise in online seller consultancy"
        canonical={`${process.env.PUBLIC_URL}/telephonic-consultation`}
      />
      <Header />

      <Consultancy data={faq} />

      <IntroVideo />
      <Partner />
      <ModalForm show={show} handleClose={handleClose} />
      <Footer />
    </Layout>
  );
};

export default TelephonicPage;

export async function getServerSideProps() {
  const faq = await prisma.faq.findMany({
    where: {
      status: true,
    },
    orderBy: [
      {
        id: "asc",
      },
    ],
  });

  return {
    props: {
      faqData: faq.length != 0 ? JSON.stringify(faq) : null,
    },
  };
}
