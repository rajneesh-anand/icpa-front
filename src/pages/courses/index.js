import React from "react";
import IntroVideo from "@/components/IntroVideo";
import CourseList from "@/components/Course/course-list";
import HomeContactPage from "@/components/Home/Contact";
import Partner from "@/components/Partner";
import Seo from "@/components/Seo";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";
import prisma from "@/libs/prisma";

const CourseListPage = ({ coursesData }) => {
  const courses = coursesData ? JSON.parse(coursesData) : [];
  return (
    <Layout>
      <Seo
        title="Courses | ICPA Global Consultants"
        description="Online Seller Courses | ICPA Global Consultant is one stop solution for setting up an online store on various platforms i.e ( Amazon , Flipkart , Meesho , Shopsy ). We have years of expertise in online seller consultancy"
        canonical={`${process.env.PUBLIC_URL}/courses`}
      />
      <Header />
      <IntroVideo />
      <CourseList data={courses} />
      <HomeContactPage />
      <Partner />
      <Footer />
    </Layout>
  );
};

export async function getServerSideProps() {
  const courses = await prisma.courses.findMany({
    where: {
      status: true,
    },
    orderBy: [
      {
        id: "asc",
      },
    ],
  });

  return {
    props: {
      coursesData: courses.length != 0 ? JSON.stringify(courses) : null,
    },
  };
}

export default CourseListPage;
