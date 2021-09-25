import React, { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/client";

const Hiddenfrom = ({ formData }) => {
  console.log(formData);
  return (
    <form
      id="redFrom"
      method="post"
      action={`https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage?mid=${formData.mid}&orderId=${formData.orderId}`}
      name="paytm"
    >
      <input type="hidden" name="mid" value={formData.mid} />
      <input type="hidden" name="orderId" value={formData.orderId} />
      <input type="hidden" name="txnToken" value={formData.txnToken} />
    </form>
  );
};

const MembershipPlan = () => {
  const [session, loading] = useSession();
  const [paytmData, setPaytmData] = useState({
    mid: "",
    orderId: "",
    txnToken: "",
  });

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      const orderData = {
        name: session.user.name,
        email: session.user.email,
        amount: "50",
      };

      const response = await fetch("/api/paytm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
      const result = await response.json();

      setPaytmData({
        mid: "zWEMTK89662017572077",
        orderId: result.orderId,
        txnToken: result.txnToken,
      });
      document.getElementById("redFrom").submit();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="pricing-area ptb-50 bg-F7F7FF">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">MEMBERSHIP PLANS</span>
            <h6>No Hidden Charge Applied, Choose Your Plan</h6>
          </div>

          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-pricing-box active" data-aos="zoom-in">
                <div className="title">
                  <h3>GOLD PLAN</h3>
                  <div className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star-half"></i>
                    <p>4.5 (2527 rating)</p>
                  </div>
                </div>

                <span className="popular">Most Popular</span>
                <div className="price">
                  &#x20B9;149 <span>/Month</span>
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
                <div className="btn-list">
                  <div className="plan-btn">
                    {!session ? (
                      <Link href="/auth/signin">
                        <a className="default-btn">Purchase Plan</a>
                      </Link>
                    ) : (
                      <button className="default-btn" onClick={handlePayment}>
                        Purchase Plan
                      </button>
                    )}
                  </div>
                  <div className="plan-btn">
                    <button
                      className="default-btn-blue"
                      onClick={handlePayment}
                    >
                      <i className="icofont-ui-call"></i>
                      Ask to Experts
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-pricing-box" data-aos="zoom-in">
                <div className="title">
                  <h3>BASIC PLAN</h3>
                  <p>Powerful &amp; awesome elements</p>
                </div>
                <div className="price">
                  &#x20B9;99 <span>/Month</span>
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

                <div className="btn-list">
                  <div className="plan-btn">
                    {!session ? (
                      <Link href="/auth/signin">
                        <a className="default-btn">Purchase Plan</a>
                      </Link>
                    ) : (
                      <button className="default-btn" onClick={handlePayment}>
                        Purchase Plan
                      </button>
                    )}
                  </div>
                  <div className="plan-btn">
                    <button
                      className="default-btn-blue"
                      onClick={handlePayment}
                    >
                      <i className="icofont-ui-call"></i>
                      Ask to Experts
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Hiddenfrom formData={paytmData} />
      </div>
    </>
  );
};

export default MembershipPlan;
