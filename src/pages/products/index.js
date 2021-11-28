import React from "react";
import IntroVideo from "@/components/IntroVideo";
import { usePaginatedData } from "@/utils/useRequest";
import Loading from "@/components/Loading";
import ProductsList from "@/components/ProductList";
import HomeContactPage from "@/components/Home/Contact";
import Partner from "@/components/Partner";
import Seo from "@/components/Seo";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";
import YoutubeLink from "@/components/Youtube";

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
  console.log(isLoadingMore);

  return (
    <Layout>
      <Seo
        title="Products Suggestion | ICPA Global Consultants"
        description="Amazon FLipkart Meesho Myntra Products"
        canonical={`${process.env.PUBLIC_URL}/products`}
      />
      <Header />
      <IntroVideo />

      {isLoadingMore ? (
        <Loading />
      ) : isEmpty ? (
        <div className="text-center ptb-100">
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
      <HomeContactPage />
      <YoutubeLink />
      <Partner />
      <Footer />
    </Layout>
  );
};

export default ProductPage;
