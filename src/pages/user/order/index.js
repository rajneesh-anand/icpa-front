import React, { useState } from "react";
import Link from "next/link";
import Seo from "@/components/Seo";
import { getSession, useSession } from "next-auth/client";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";
import UserCourseList from "@/components/UserCourseList/course-list";
import prisma from "@/libs/prisma";
import UserServices from "@/components/UserServices";

const UserCoursePage = ({ serviceList }) => {
  const services = serviceList ? JSON.parse(serviceList) : null;
  console.log(services);
  return (
    <Layout>
      <Seo
        title="My Course"
        description="This is course page"
        canonical={`${process.env.PUBLIC_URL}/user/order`}
      />
      <Header />
      {services ? (
        <UserServices data={services} />
      ) : (
        <div className="container">
          <div className="text-center ptb-100">
            <h4
              style={{
                color: "darkred",
                fontFamily: "Poppins",
                fontWeight: 400,
              }}
            >
              You have not purchased any services !
            </h4>
            <Link href="/services">
              <a className="default-btn-sm">Buy Service</a>
            </Link>
          </div>
        </div>
      )}
      <Footer />
    </Layout>
  );
};

export default UserCoursePage;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  const orders = await prisma.orders.findMany({
    where: {
      email: session.user.email,
      paymentStatus: "TXN_SUCCESS",
      AND: [{ courseId: null }],
    },
  });
  return {
    props: {
      serviceList: orders.length != 0 ? JSON.stringify(orders) : null,
    },
  };
}
