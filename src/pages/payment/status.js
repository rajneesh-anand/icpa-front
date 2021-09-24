import React, { useState } from "react";
import { useSession, getSession } from "next-auth/client";
import Seo from "@/components/Seo";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";
import parse from "urlencoded-body-parser";
import PaymentStatus from "@/components/PaymentStatus";

export default function PaymentStatusPage({ status }) {
  console.log(status);
  return (
    <Layout>
      <Seo
        title="Payment Status | ICPA Global Consultants"
        description="Payment Status to ICPA Global Consultants"
        canonical={`${process.env.PUBLIC_URL}/payment/status`}
      />
      <Header />
      <PaymentStatus status={status} />
      <Footer />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const data = await parse(req);
  console.log(data);

  if (data.STATUS === "TXN_SUCCESS") {
    await prisma.courseorders.updateMany({
      where: { orderNumber: data.ORDERID },
      data: {
        paymentStatus: data.STATUS,
        paymentID: data.TXNID,
      },
    });
  }

  return {
    props: { status: data.RESPMSG },
  };
}
