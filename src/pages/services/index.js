import React, { useState, useEffect } from "react";
import IntroVideo from "@/components/IntroVideo";
import KeyFeatures from "@/components/KeyFeatures";
import HomeContactPage from "@/components/Home/Contact";
import Partner from "@/components/Partner";
import Seo from "@/components/Seo";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";
import { usePaginatedData } from "@/utils/useRequest";
import Loading from "@/components/Loading";
import ModalForm from "@/components/ModalForm";
import MembershipPlan from "@/components/MembershipPlan";
import YoutubeLink from "@/components/Youtube";
import Image from "next/image";

const ServicePage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 5000);
  }, []);

  const {
    result,
    error,
    isLoadingMore,
    size,
    setSize,
    isReachingEnd,
    isEmpty,
  } = usePaginatedData("/api/services");

  return (
    <Layout>
      <Seo
        title="Services | ICPA Global Consultants"
        description="Online Seller Services | ICPA Global Consultant is one stop solution for setting up an online store on various platforms i.e ( Amazon , Flipkart , Meesho , Shopsy ). We have years of expertise in online seller consultancy"
        canonical={`${process.env.PUBLIC_URL}/services`}
      />
      <Header />
      {/* <IntroVideo /> */}

      <div className="product-page-title">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-xl-6 text-center">
              <h2>ONE STOP SOLUTION FOR ONLINE SELLER</h2>
              <p>
                We are always motivated to deliver best possible services for
                online sellers. Avail our Services to sell your products online
                hassle free.
              </p>
            </div>
            <div className="col-12  col-xl-6 ">
              <div style={{ position: "relative", height: 320 }}>
                <Image
                  src="/images/service.png"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {isLoadingMore ? (
        <Loading />
      ) : isEmpty ? (
        <div className="text-center ptb-100">
          <h6>No Service Available !</h6>
        </div>
      ) : (
        <>
          <KeyFeatures data={result} />
          <div className="row">
            <div className="col d-flex justify-content-center">
              {!isReachingEnd && (
                <button
                  className="default-btn"
                  disabled={isLoadingMore || isReachingEnd}
                  onClick={() => setSize(size + 1)}
                >
                  {isLoadingMore ? "Loading..." : "More Services"}
                </button>
              )}
            </div>
          </div>
        </>
      )}
      {/* <MembershipPlan /> */}
      <HomeContactPage />
      <YoutubeLink />
      <Partner />
      <ModalForm show={show} handleClose={handleClose} />
      <Footer />
    </Layout>
  );
};

export default ServicePage;
