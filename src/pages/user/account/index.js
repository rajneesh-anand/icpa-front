import React, { useState } from "react";
import Seo from "@/components/Seo";
import { getSession, useSession } from "next-auth/client";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";
import UserAccount from "@/components/UserAccount";

const UserCoursePage = ({ profileDetails }) => {
  const profile = JSON.parse(profileDetails);
  console.log(profile);
  return (
    <Layout>
      <Seo
        title="My Course"
        description="This is couse"
        canonical={`${process.env.PUBLIC_URL}/user/course`}
      />
      <Header />

      <UserAccount data={profile} />

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

  const profile = await prisma.user.findMany({
    where: {
      email: session.user.email,
    },
  });

  return {
    props: { profileDetails: profile ? JSON.stringify(profile) : null },
  };
}
