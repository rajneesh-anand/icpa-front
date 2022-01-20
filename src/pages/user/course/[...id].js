import React, { useState } from "react";
import Seo from "@/components/Seo";
import { getSession, useSession } from "next-auth/client";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";
import UserCourseDetail from "@/components/UserCourseList/course-details";
import prisma from "@/libs/prisma";
import Link from "next/link";

const UserCourseVideoPage = ({ chapterList }) => {
  const lectures = chapterList ? JSON.parse(chapterList) : null;

  return (
    <Layout>
      <Seo
        title="My Course"
        description="Watch Course Videos"
        canonical={`${process.env.PUBLIC_URL}/user/course`}
      />
      <Header />

      {lectures ? (
        <UserCourseDetail data={lectures} />
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
              There is no course media available !
            </h4>
            <Link href="/contact">
              <a className="default-btn-sm">Contact Us</a>
            </Link>
          </div>
        </div>
      )}

      <Footer />
    </Layout>
  );
};

export default UserCourseVideoPage;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const { id } = context.params;
  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  const data = await prisma.orders.findFirst({
    where: {
      email: session.user.email,
      courseId: Number(id[0]),
    },
  });

  if (data) {
    const lectures = await prisma.coursemedia.findMany({
      where: {
        courseId: Number(id[0]),
      },
      orderBy: [
        {
          id: "asc",
        },
      ],
    });

    console.log(lectures);

    return {
      props: {
        chapterList: lectures.length != 0 ? JSON.stringify(lectures) : null,
      },
    };
  } else {
    return {
      props: { chapterList: null },
    };
  }
}
