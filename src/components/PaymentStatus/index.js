import React, { useState } from "react";

const PaymentStatus = ({ status }) => {
  console.log(status);

  return (
    <>
      <div className="payment-status-area ptb-100 ">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-12 col-md-12 col-sm-12 text-center">
              {status === "Txn Success" ? (
                <>
                  <div data-aos="zoom-in">
                    <i className="ri-check-line"></i>
                    <span>
                      Congratulations &amp; Thank You for purchasing Gold Plan
                    </span>
                    <h6>Our Business team will contact you shortly</h6>
                  </div>
                </>
              ) : (
                <div data-aos="zoom-in">
                  <i className="ri-close-line"></i>
                  <h6>{status}</h6>
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
