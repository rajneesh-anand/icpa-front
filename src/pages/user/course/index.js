import React, { useState } from "react";
import Seo from "@/components/Seo";
import { getSession, useSession } from "next-auth/client";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";
import UserCourseList from "@/components/UserCourseList/course-list";
import prisma from "@/libs/prisma";

const UserCoursePage = ({ courseList }) => {
  const course = courseList ? JSON.parse(courseList) : [];
  return (
    <Layout>
      <Seo
        title="My Course"
        description="This is couse"
        canonical={`${process.env.PUBLIC_URL}/user/course`}
      />
      <Header />
      {course ? (
        <UserCourseList data={course} />
      ) : (
        <h6>You have not enrolled for any course</h6>
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

  const courses = await prisma.orders.findMany({
    where: {
      email: session.user.email,
    },
    select: {
      courseId: true,
    },
  });

  let newArray = courses.map((el) => el.courseId);
  let courseArray = JSON.parse(newArray.toString());
  const result =
    await prisma.$queryRaw`SELECT * FROM "Courses" c where id in (${courseArray})`;

  return {
    props: { courseList: result.length != 0 ? JSON.stringify(result) : null },
  };
}
