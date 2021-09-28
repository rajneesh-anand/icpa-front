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
                  <div
                    className="service-card text-center"
                    data-aos="fade-down"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1611916656173-875e4277bea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400"
                      alt={item.serviceName}
                    />
                    <h6>{item.serviceName}</h6>
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
