import React from "react";
import IntroVideo from "@/components/IntroVideo";
import HomeContactPage from "@/components/Home/Contact";
import MembershipPlan from "@/components/MembershipPlan";
import Partner from "@/components/Partner";
import Seo from "@/components/Seo";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";

const MembershipPage = () => {
  return (
    <Layout>
      <Seo
        title="Membership Plans | ICPA Global Consultants"
        description="Membership Gold Plans"
        canonical={`${process.env.PUBLIC_URL}/membership`}
      />
      <Header />
      <IntroVideo />
      <MembershipPlan />
      <HomeContactPage />
      <Partner />
      <Footer />
    </Layout>
  );
};

export default MembershipPage;

export async function getServerSideProps() {
  const result = await fetch(`${process.env.API_URL}/awsupload/fetchObject`);
  const data = await result.json();

  return {
    props: { banner: data ? data.data : null },
  };
}
