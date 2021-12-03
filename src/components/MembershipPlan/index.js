import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/client";

const Hiddenfrom = ({ formData }) => {
  return (
    <form
      id="mForm"
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
  const [membershipData, setMembershipData] = useState();
  const [paytmData, setPaytmData] = useState({
    mid: "",
    orderId: "",
    txnToken: "",
  });

  useEffect(async () => {
    const res = await fetch(`${process.env.API_URL}/upload/plan`);
    const data = await res.json();
    setMembershipData(data);
  }, []);
  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      const orderData = {
        name: session.user.name,
        email: session.user.email,
        amount: membershipData.fee,
        type: "Membership Gold Plan",
      };

      const response = await fetch("/api/paytm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
      const result = await response.json();
      console.log(result);
      setPaytmData({
        mid: "zWEMTK89662017572077",
        orderId: result.orderId,
        txnToken: result.txnToken,
      });
      document.getElementById("mForm").submit();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="page-title-area mt-4">
        <div className="container">
          <div className="page-title-content">
            <h4>JOIN OUR GOLD MEMBERSHIP PLAN </h4>
          </div>
        </div>
      </div>
      <div className="membership-area ptb-50">
        <div className="container">
          <div className="text-center">
            <img
              src="/images/gold.png"
              alt="gold-membership"
              height={128}
              width={128}
            />
          </div>
          <div className="section-title">
            <span className="sub-title">GOLD MEMBERSHIP PLAN</span>
            <div className="title">
              <div className="rating">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star-half"></i>
              </div>
              {membershipData && (
                <p>
                  {membershipData.rating} ( {membershipData.number_of_ratings}{" "}
                  Ratings )
                </p>
              )}
            </div>
          </div>

          <div className="row align-items-center justify-content-center">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="single-pricing-box active">
                {membershipData && (
                  <span className="popular">{membershipData.tag}</span>
                )}
                {membershipData && (
                  <div className="price">
                    &#x20B9;{membershipData.fee} <span>/Month</span>
                  </div>
                )}

                <ul className="features-list">
                  {membershipData &&
                    membershipData.features.map((item, index) => (
                      <li key={index}>
                        <i className="ri-check-line"></i>
                        {item}
                      </li>
                    ))}
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
                    <Link href="/contact">
                      <a className="default-btn-blue">Ask Our Experts</a>
                    </Link>
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
