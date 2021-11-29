import React, { useState } from "react";
import Seo from "@/components/Seo";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";
import styled from "styled-components";
export const MessageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 60vh;
`;

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
          <MessageBox>
            <h4 style={{ color: "red" }}>Your verification link expired !</h4>
          </MessageBox>
        </div>
      </div>

      <Footer />
    </Layout>
  );
}
