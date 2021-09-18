import React from "react";
import IntroVideo from "@/components/IntroVideo";
// import Membership from "@/components/Membership";
import PricingPlanStyle1 from "@/components/PricingPlan/PricingPlanStyle1";
import PricingPlanStyle2 from "@/components/PricingPlan/PricingPlanStyle2";
import PricingPlanStyle3 from "@/components/PricingPlan/PricingPlanStyle3";
import PricingPlanStyle4 from "@/components/PricingPlan/PricingPlanStyle4";
import PricingPlanStyle5 from "@/components/PricingPlan/PricingPlanStyle5";
import FreeTrial from "@/components/FreeTrial";
import Partner from "@/components/Partner";
import Seo from "@/components/Seo";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";

const MembershipPage = ({ services }) => {
  return (
    <Layout>
      <Seo
        title="Membership Plans | ICPA Global Consultants"
        description="This is home"
        canonical={`${process.env.PUBLIC_URL}/membership`}
      />
      <Header />
      <IntroVideo />
      <PricingPlanStyle2 />

      <FreeTrial />
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
