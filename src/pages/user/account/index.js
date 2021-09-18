import React, { useEffect } from "react";
import { useSession, getSession } from "next-auth/client";
import Seo from "@/components/Seo";
import NavbarStyleOne from "@/components/_App/NavbarStyleOne";
import prisma from "@/libs/prisma";

const Account = ({ orderData }) => {
  const data = JSON.parse(orderData).length != 0 ? JSON.parse(orderData) : null;
  console.log(data);

  return (
    <>
      <Seo
        title="Orders"
        description="This is couse"
        canonical={`${process.env.PUBLIC_URL}/course`}
      />
      <NavbarStyleOne />
      {data ? (
        data.map((item, index) => (
          <div key={index} className="pt-100 pb-70">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="single-courses-box">
                    <div className="courses-image">
                      <a className="d-block image">
                        <img src="/images/course_01.jpg" alt="course-01" />
                      </a>
                    </div>
                  </div>
                  <div className="courses-content">
                    <div className="course-author d-flex align-items-center">
                      <img
                        src="/images/user1.jpg"
                        className="rounded-circle"
                        alt="Oshoa"
                      />
                      <span>Oshoa</span>
                    </div>
                    <h3>
                      The Complete Digital Marketing Course - 12 Courses in 1
                    </h3>
                    <p>
                      Grow a Business Online From Scratch Make Money as an
                      Affiliate Marketer Land a High-Paying Job in Di
                    </p>
                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                      <li>
                        <i className="flaticon-agenda"></i> 20 Lessons
                      </li>
                      <li>
                        <i className="flaticon-people"></i> 20 Hours
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1>No Orders</h1>
      )}
    </>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const orders = await prisma.courseorders.findMany({
    where: {
      customer: { email: session.user.email },
      paymentStatus: "TXN_SUCCESS",
    },
    include: {
      customer: {
        select: { name: true },
      },
    },
  });

  return {
    props: {
      orderData:
        orders.length != 0 ? JSON.stringify(orders) : JSON.stringify([]),
    },
  };
}

export default Account;
