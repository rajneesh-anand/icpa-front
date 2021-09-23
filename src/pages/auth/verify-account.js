import React, { useState } from "react";
import Seo from "@/components/Seo";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";

export default function AccountverifyPage() {
  return (
    <Layout>
      <Seo
        title="SignIn-Verify | ICPA Global Consultants"
        description="Sign In to ICPA Global Consultants"
        canonical={`${process.env.PUBLIC_URL}/auth/verify-account`}
      />
      <Header />
      <div className="container">
        <div className="row">
          <div className="text-center">
            <h3>
              We have sent a verification link to your registered email address.
            </h3>
            <h2>Login to your email address and verify.</h2>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
