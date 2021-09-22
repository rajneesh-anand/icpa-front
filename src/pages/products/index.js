import React from "react";
import IntroVideo from "@/components/IntroVideo";
import { usePaginatedData } from "@/utils/useRequest";
import Loading from "@/components/Loading";
import ProductsList from "@/components/ProductList";
import FreeTrial from "@/components/FreeTrial";
import Partner from "@/components/Partner";
import Seo from "@/components/Seo";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";

const ProductPage = () => {
  const {
    result,
    error,
    isLoadingMore,
    size,
    setSize,
    isReachingEnd,
    isEmpty,
  } = usePaginatedData("/api/products");

  return (
    <Layout>
      <Seo
        title="Products Suggestion | ICPA Global Consultants"
        description="This is home"
        canonical={`${process.env.PUBLIC_URL}/products`}
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
          <ProductsList data={result} />
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
      <Footer />
    </Layout>
  );
};

export default ProductPage;
