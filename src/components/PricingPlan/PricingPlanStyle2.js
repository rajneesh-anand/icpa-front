import React from "react";
import Link from "next/link";

const PricingPlanStyle2 = () => {
  return (
    <>
      <div className="pricing-area ptb-50 bg-F7F7FF">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">MEMBERSHIP PLANS</span>
            {/* <h4>No Hidden Charge Applied, Choose Your Plan</h4> */}
          </div>

          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-pricing-box active">
                <div className="title">
                  <h3>GOLD PLAN</h3>
                  <div className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star-half"></i>
                    <p>4.5 (1 rating)</p>
                  </div>
                </div>

                <span className="popular">Most Popular</span>
                <div className="price">
                  &#x20B9;49 <span>/Month</span>
                </div>

                <ul className="features-list">
                  <li>
                    <i className="ri-check-line"></i> Sale Boost - Product
                    Keywords Search
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Amazon Prime Batch &amp;
                    Guaranteed Delivery Enroll
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Amazon Seller Flex Apply
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Increase Product
                    Visibility / Sponsored on Products
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Coupon / Offer / Deals
                    &amp; Promotion
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Plan of Action, Reviews
                    &amp; Ratings
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Brand Protection / Brand
                    Registration / Brand Authorization &amp; FBA Registration
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Products Listing / Product
                    Suggestions
                  </li>
                  <li>
                    <i className="ri-check-line"></i> ODR Manage &amp;
                    Trade-Mark Manage
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Stock Management &amp;
                    Growth Planning
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Complete Seller Account
                    Handling
                  </li>
                  <li>
                    <i className="ri-check-line"></i> 100% Account Protection
                    from Suspension
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Live Support
                  </li>
                </ul>

                <div className="plan-btn">
                  <Link href="/sign-in">
                    <a className="default-btn">Purchase Plan</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-pricing-box">
                <div className="title">
                  <h3>BASIC PLAN</h3>
                  <p>Powerful &amp; awesome elements</p>
                </div>
                <div className="price">
                  $59 <span>/Month</span>
                </div>

                <ul className="features-list">
                  <li>
                    <i className="ri-check-line"></i> Sale Boost - Product
                    Keywords Search
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Amazon Prime Batch &amp;
                    Guaranteed Delivery Enroll
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Amazon Seller Flex Apply
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Increase Product
                    Visibility / Sponsored on Products
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Coupon / Offer / Deals
                    &amp; Promotion
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Plan of Action, Reviews
                    &amp; Ratings
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Brand Protection / Brand
                    Registration / Brand Authorization &amp; FBA Registration
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Products Listing / Product
                    Suggestions
                  </li>
                  <li>
                    <i className="ri-check-line"></i> ODR Manage &amp;
                    Trade-Mark Manage
                  </li>
                  <li>
                    <i className="ri-close-line"></i> Stock Management &amp;
                    Growth Planning
                  </li>
                  <li>
                    <i className="ri-close-line"></i> Complete Seller Account
                    Handling
                  </li>
                  <li>
                    <i className="ri-close-line"></i> 100% Account Protection
                    from Suspension
                  </li>
                  <li>
                    <i className="ri-close-line"></i> Live Support
                  </li>
                </ul>

                <div className="plan-btn">
                  <Link href="/sign-in">
                    <a className="default-btn">Purchase Plan</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPlanStyle2;
