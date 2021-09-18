import Layout from "layout";
import CourseDetail from "@/components/Course/course-details";
import NavbarStyleOne from "@/components/_App/NavbarStyleOne";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";
import Seo from "@/components/Seo";
import parse from "urlencoded-body-parser";

const CourseDetailPage = () => {
  return (
    <>
      <Seo
        title="Course"
        description="This is couse"
        canonical={`${process.env.PUBLIC_URL}/course`}
      />
      <NavbarStyleOne />

      <CourseDetail />
    </>
  );
};

export default CourseDetailPage;

export async function getServerSideProps(context) {
  const { req } = context;
  const data = await parse(req);
  console.log(data);

  if (data.STATUS === "TXN_SUCCESS") {
    await prisma.courseorders.updateMany({
      where: { orderNumber: data.ORDERID },
      data: {
        paymentStatus: data.STATUS,
        paymentID: data.TXNID,
      },
    });

    return {
      redirect: {
        destination: "/user/account",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
