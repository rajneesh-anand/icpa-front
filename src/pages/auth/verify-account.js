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
            <svg width="72px" height="72px">
              <g fill="none" stroke="#8EC343" strokeWidth="2">
                <circle
                  cx="36"
                  cy="36"
                  r="35"
                  style={{
                    strokeDasharray: "240px 240px",
                    strokeDashoffset: "480px",
                  }}
                />
                <path
                  d="M17.417,37.778l9.93,9.909l25.444-25.393"
                  style={{
                    strokeDasharray: "50px 50px",
                    strokeDashoffset: "0px",
                  }}
                />
              </g>
            </svg>
            <div style={{ marginTop: 16 }}>
              <h4 style={{ color: "green" }}>
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
