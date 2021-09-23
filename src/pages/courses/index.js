import React from "react";
import IntroVideo from "@/components/IntroVideo";
import CourseList from "@/components/Course/course-list";
import FreeTrial from "@/components/FreeTrial";
import Partner from "@/components/Partner";
import Seo from "@/components/Seo";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";

const CourseListPage = ({ courses }) => {
  return (
    <Layout>
      <Seo
        title="Courses | ICPA Global Consultants"
        description="This is home"
        canonical={`${process.env.PUBLIC_URL}/courses`}
      />
      <Header />
      <IntroVideo />
      <CourseList />
      <FreeTrial />
      <Partner />
      <Footer />
    </Layout>
  );
};

export async function getServerSideProps() {
  const result = await fetch(`${process.env.API_URL}/awsupload/fetchObject`);
  const data = await result.json();

  return {
    props: { banner: data ? data.data : null },
  };
}

export default CourseListPage;
