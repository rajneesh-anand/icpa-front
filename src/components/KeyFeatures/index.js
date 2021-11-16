import React from "react";
import Link from "next/link";

const KeyFeatures = ({ data }) => {
  return (
    <>
      <div className="features-area ptb-100">
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
                  <div className="service-card" data-aos="fade-down">
                    <div
                      className="service-card-img"
                      style={{
                        backgroundImage:
                          "url(https://images.unsplash.com/photo-1491374812364-00028bbe7d2f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a22e4862c36c552e726815949fbcb41a&auto=format&fit=crop&w=500&q=60)",
                      }}
                    >
                      <div className="overlay">
                        <div className="overlay-content">
                          <Link href={`/service/${item.slug}`}>
                            <a>View Details</a>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="service-card-content">
                      <div
                        style={{
                          position: "relative",
                          display: "flex",
                          padding: "8px 16px",
                        }}
                      >
                        {item.serviceFee > 0 ? (
                          <h2> &#x20B9;{item.serviceFee}</h2>
                        ) : (
                          <h2>Free</h2>
                        )}

                        <span className="popular">{item.popularity}</span>
                      </div>
                      <div className="text-center serviceName">
                        <h4>{item.serviceName}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* <div className="row justify-content-center">
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default KeyFeatures;
