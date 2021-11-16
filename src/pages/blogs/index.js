import React, { useState, useEffect } from "react";
import BlogList from "@/components/Blog/blog-list";
import FreeTrial from "@/components/FreeTrial";
import Partner from "@/components/Partner";
import Seo from "@/components/Seo";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";
import Loading from "@/components/Loading";
import { usePaginatedData } from "@/utils/useRequest";

const BlogListPage = () => {
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
  } = usePaginatedData("/api/blogs");

  return (
    <Layout>
      <Seo
        title="News Updates | ICPA Global Consultants"
        description="Amazon Flipkart Other E-Commerce Seller Platforms News and Updates"
        canonical={`${process.env.PUBLIC_URL}/blogs`}
      />
      <Header />
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <ul>
              <li>
                <a>Home</a>
              </li>

              <li className="active">News &amp; Updates</li>
            </ul>
            <h4>LATEST NEWS FROM THE WORLD OF E-COMMERCE</h4>
          </div>
        </div>
      </div>

      {isLoadingMore ? (
        <Loading />
      ) : isEmpty ? (
        <div className="text-center">
          <h6>No Service Available !</h6>
        </div>
      ) : (
        <>
          <BlogList data={result} />
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

export default BlogListPage;
