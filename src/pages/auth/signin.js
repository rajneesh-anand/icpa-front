import React, { useState } from "react";
import { getCsrfToken, getSession } from "next-auth/client";
import SignInModal from "@/components/SignIn";
import Seo from "@/components/Seo";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";

const SignInPage = ({ csrfToken }) => {
  return (
    <Layout>
      <Seo
        title="Sign In | ICPA Global Consultants"
        description="Sign In to ICPA Global Consultants"
        canonical={`${process.env.PUBLIC_URL}/auth/signin`}
      />
      <Header />
      <SignInModal csrfToken={csrfToken} />
      <Footer />
    </Layout>
  );
};

export default SignInPage;
export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context);
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { csrfToken },
  };
}
