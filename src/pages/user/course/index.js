import React, { useState } from "react";
import Link from "next/link";
import Seo from "@/components/Seo";
import { getSession, useSession } from "next-auth/client";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";
import UserCourseList from "@/components/UserCourseList/course-list";

const UserCoursePage = ({ courseList }) => {
  // console.log(courseList);
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
        <div className="container">
          <div className="text-center ptb-100">
            <h4
              style={{
                color: "darkred",
                fontFamily: "Poppins",
                fontWeight: 400,
              }}
            >
              You have not enrolled for any course !
            </h4>
            <Link href="/courses">
              <a className="default-btn-sm">Buy Course</a>
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

  const result = await fetch(`${process.env.PUBLIC_URL}/api/courses`);
  const data = await result.json();

  return {
    props: { courseList: data.dada ? data.data : null },
  };
}
