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
          <div className="text-center mtb-100">
            <i
              className="ri-mail-send-line"
              style={{ fontSize: "64px", color: "green" }}
            ></i>
            <div style={{ marginTop: 16 }}>
              <h4 style={{ color: "green", fontWeight: 500 }}>
                We have sent a login link to your registered email address !
              </h4>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
