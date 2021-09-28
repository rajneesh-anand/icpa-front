import React, { useState } from "react";
import Seo from "@/components/Seo";
import { getSession, useSession } from "next-auth/client";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";
import UserCourseDetail from "@/components/UserCourseList/course-details";

const UserCourseVideoPage = ({ chapterList }) => {
  const course = JSON.parse(chapterList);

  return (
    <Layout>
      <Seo
        title="My Course"
        description="This is couse"
        canonical={`${process.env.PUBLIC_URL}/user/course`}
      />
      <Header />
      {course ? (
        <UserCourseDetail data={course} />
      ) : (
        <h6>You have not enrolled for the course</h6>
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

    return {
      props: { chapterList: lectures ? JSON.stringify(lectures) : null },
    };
  } else {
    return {
      props: { chapterList: null },
    };
  }
}