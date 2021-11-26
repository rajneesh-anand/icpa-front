import React from "react";
import Link from "next/link";

const KeyFeatures = ({ data }) => {
  return (
    <>
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h4>ONLINE SELLER SERVICES FOR AMAZON / FLIPKART</h4>
          </div>
        </div>
      </div>
      <div className="features-area ptb-50">
        <div className="container">
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
                          {/* <Link href={`/service/${item.slug}`}> */}
                          <Link href="#">
                            <a>Contact Us </a>
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
        </div>
      </div>
    </>
  );
};

export default KeyFeatures;
