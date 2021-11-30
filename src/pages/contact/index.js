import React from "react";
import IntroVideo from "@/components/IntroVideo";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
import Partner from "@/components/Partner";
import Seo from "@/components/Seo";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";

const ContactPage = () => {
  return (
    <Layout>
      <Seo
        title="Contact Us | ICPA Global Consultants"
        description="Contact Us | ICPA Global Consultant is one stop solution for setting up an online store on various platforms i.e ( Amazon , Flipkart , Meesho , Shopsy ). We have years of expertise in online seller consultancy"
        canonical={`${process.env.PUBLIC_URL}/contact`}
      />
      <Header />
      {/* <IntroVideo /> */}

      <ContactInfo />
      <ContactForm />
      <Partner />
      <Footer />
    </Layout>
  );
};

export default ContactPage;
