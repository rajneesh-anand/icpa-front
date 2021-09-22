import React from "react";
import Link from "next/link";

const KeyFeatures = ({ data }) => {
  return (
    <>
      <div className="features-area ptb-100 bg-F7F7FF">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">OUR KEY SERVICES</span>
            <h4>We are dedicated to provide best online seller services </h4>
          </div>

          <div className="row justify-content-center">
            {data &&
              data.map((item, index) => (
                <div
                  key={index}
                  className="col-xl-4 col-lg-6 col-sm-6 col-md-6"
                >
                  <div className="single-features-item" data-aos="fade-down">
                    {/* <div className="icon">
                      <i className="ri-eye-line"></i>
                    </div> */}
                    <h4>{item.serviceName}</h4>
                    {/* <p>{item.description}</p> */}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyFeatures;
