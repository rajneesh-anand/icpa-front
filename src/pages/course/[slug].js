import React from "react";
import CourseDetails from "@/components/Course/course-details";
import HomeContactPage from "@/components/Home/Contact";
import Partner from "@/components/Partner";
import Seo from "@/components/Seo";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";

const CourseDetailPage = ({ course }) => {
  return (
    <Layout>
      <Seo
        title={`${course.courseName}`}
        description={`${course.description}`}
        canonical={`${process.env.PUBLIC_URL}/course/${course.slug}`}
      />
      <Header />
      <CourseDetails data={course} />
      <Partner />
      <Footer />
    </Layout>
  );
};

export async function getServerSideProps({ params, req, res }) {
  const { slug } = params;
  const result = await fetch(`${process.env.PUBLIC_URL}/api/course/${slug}`);
  const data = await result.json();

  return {
    props: { course: data ? data.data : null },
  };
}

export default CourseDetailPage;
