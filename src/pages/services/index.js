import React, { useState, useEffect } from "react";
import IntroVideo from "@/components/IntroVideo";
import KeyFeatures from "@/components/KeyFeatures";
import FreeTrial from "@/components/FreeTrial";
import Partner from "@/components/Partner";
import Seo from "@/components/Seo";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";
import { usePaginatedData } from "@/utils/useRequest";
import Loading from "@/components/Loading";
import ModalForm from "@/components/ModalForm";

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
        description="This is home"
        canonical={`${process.env.PUBLIC_URL}/services`}
      />
      <Header />
      <IntroVideo />

      {isLoadingMore ? (
        <Loading />
      ) : isEmpty ? (
        <div className="text-center">
          <h6>No Product Available !</h6>
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

      <FreeTrial />
      <Partner />
      <ModalForm show={show} handleClose={handleClose} />
      <Footer />
    </Layout>
  );
};

export default ServicePage;
