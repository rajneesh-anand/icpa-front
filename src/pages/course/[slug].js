import React from "react";
import CourseDetails from "@/components/Course/course-details";
import FreeTrial from "@/components/FreeTrial";
import Partner from "@/components/Partner";
import Seo from "@/components/Seo";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";

const CourseDetailPage = ({ data }) => {
  const course = data ? JSON.parse(data) : null;
  return (
    <Layout>
      <Seo
        title={`${course.courseName}`}
        description={`${course.description}`}
        canonical={`${process.env.PUBLIC_URL}/course/${course.slug}`}
      />
      <Header />
      {course && <CourseDetails data={course} />}
      <Partner />
      <Footer />
    </Layout>
  );
};

export async function getServerSideProps({ params, req, res }) {
  try {
    const { slug } = params;
    const course = await prisma.courses.findFirst({
      where: {
        slug: slug,
      },
    });

    return {
      props: { data: JSON.stringify(course) },
    };
  } catch (error) {
    res.statusCode = 404;
    return {
      props: {},
    };
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}

export default CourseDetailPage;
