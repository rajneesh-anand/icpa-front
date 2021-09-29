import React, { useState } from "react";
import Seo from "@/components/Seo";
import { getSession, useSession } from "next-auth/client";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";
import UserCourseList from "@/components/UserCourseList/course-list";

const UserCoursePage = ({ courseList }) => {
  return (
    <Layout>
      <Seo
        title="My Course"
        description="This is couse"
        canonical={`${process.env.PUBLIC_URL}/user/course`}
      />
      <Header />
      {courseList ? (
        <UserCourseList data={courseList} />
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
  const result = await fetch(`${process.env.PUBLIC_URL}/api/courses`);
  const data = await result.json();
  console.log(data);

  return {
    props: { courseList: data ? data.data : null },
  };
}
