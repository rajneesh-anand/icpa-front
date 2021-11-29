import React, { useState } from "react";
import Link from "next/link";
const PaymentStatus = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="payment-status-area ptb-100 ">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-12 col-md-12 col-sm-12 text-center">
              {data.RESPMSG === "Txn Success" ? (
                <>
                  <div data-aos="zoom-in">
                    <svg width="72px" height="72px">
                      <g fill="none" stroke="#8EC343" strokeWidth="2">
                        <circle
                          cx="36"
                          cy="36"
                          r="35"
                          style={{
                            strokeDasharray: "240px 240px",
                            strokeDashoffset: "480px",
                          }}
                        />
                        <path
                          d="M17.417,37.778l9.93,9.909l25.444-25.393"
                          style={{
                            strokeDasharray: "50px 50px",
                            strokeDashoffset: "0px",
                          }}
                        />
                      </g>
                    </svg>

                    <div className="text-center pt-2 pb-2">
                      <h6>Thank you for purchasing our service</h6>
                    </div>
                    <h6>Our Business team will contact you shortly !</h6>
                    <div className="text-center pt-2">
                      <Link href="/">
                        <a className="default-btn-sm">Explore More</a>
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <div className="payment-danger">
                  <i className="ri-close-line"></i>
                  <h6>{data.RESPMSG}</h6>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentStatus;
