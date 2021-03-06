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
import Image from "next/image";

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
        description="Select Products for online Listing | ICPA Global Consultant is one stop solution for setting up an online store on various platforms i.e ( Amazon , Flipkart , Meesho , Shopsy ). We have years of expertise in online seller consultancy"
        canonical={`${process.env.PUBLIC_URL}/products`}
      />
      <Header />
      {/* <IntroVideo /> */}

      <div className="product-page-title">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-xl-6 text-center">
              <h2>PRODUCTS SUGGESTION</h2>
              <p>
                Pick products from our stock inventory to list on Amazon /
                Flipkart / Meesho / Shopsy etc. ecommerce online platform
              </p>
            </div>
            <div className="col-12  col-xl-6 ">
              <div style={{ position: "relative", height: 320 }}>
                <Image
                  src="/images/stack.jpg"
                  layout="fill"
                  objectFit="cover"
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
