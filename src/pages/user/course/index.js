import React, { useState } from "react";
import Seo from "@/components/Seo";
import { getSession, useSession } from "next-auth/client";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";
import UserCourseList from "@/components/UserCourseList/course-list";

const UserCoursePage = ({ courseList }) => {
  console.log(courseList);
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

  const result = await fetch("http://localhost:3000/api/courses");
  const data = await result.json();
  console.log(data.data);

  return {
    props: { courseList: data.data },
  };

  // const orders = await prisma.orders.findMany({
  //   where: {
  //     email: session.user.email,
  //   },
  //   select: {
  //     courseId: true,
  //   },
  // });
  // let newArray = orders.map((el) => el.courseId);
  // let courseIdList = newArray.filter((x) => x).join(",");

  // const result = await prisma.$queryRaw(
  //   `select * from "Courses" where id in (${courseIdList})`
  // );

  // console.log(result);

  // return {
  //   props: { courseList: result.length != 0 ? JSON.stringify(result) : null },
  // };
}
