import React, { useState } from "react";
import Link from "next/link";
import Seo from "@/components/Seo";
import { getSession, useSession } from "next-auth/client";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";
import UserCourseList from "@/components/UserCourseList/course-list";
import prisma from "@/libs/prisma";

const UserCoursePage = ({ courseList }) => {
  // console.log(courseList);
  return (
    <Layout>
      <Seo
        title="My Course"
        description="This is course page"
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
  } else {
    const orders = await prisma.orders.findMany({
      where: {
        email: session.user.email,
      },
      select: {
        courseId: true,
      },
    });
    console.log(orders);

    if (orders.length > 0) {
      let newArray = orders.map((el) => el.courseId);
      let courseIdList = newArray.filter((x) => x).join(",");
      const result = await prisma.$queryRaw(
        `select * from "Courses" where id in (${courseIdList})`
      );
      console.log(result);
      return {
        props: { courseList: result },
      };
    } else {
      return {
        props: { courseList: null },
      };
    }
  }
}
