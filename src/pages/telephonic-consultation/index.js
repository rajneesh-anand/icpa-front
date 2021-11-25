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
        title="ICPA Global Consultants | Telephonic Consultation"
        description="Amazon Flipkart Other E-Commerce Platform Seller | Telephonic Consultation"
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
