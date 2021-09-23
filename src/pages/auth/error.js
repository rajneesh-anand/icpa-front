import React, { useState } from "react";
import Seo from "@/components/Seo";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";

export default function VerifyErrorPage() {
  return (
    <Layout>
      <Seo
        title="SignIn-Error | ICPA Global Consultants"
        description="Sign In to ICPA Global Consultants"
        canonical={`${process.env.PUBLIC_URL}/auth/error`}
      />
      <Header />
      <div className="container">
        <div className="row">
          <div className="text-center">
            <h3>Oops Something went wrong</h3>
            <h2>Your verification link expired</h2>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
}
