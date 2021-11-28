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
                        backgroundImage: item.image
                          ? item.image
                          : `url(https://images.unsplash.com/photo-1491374812364-00028bbe7d2f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a22e4862c36c552e726815949fbcb41a&auto=format&fit=crop&w=500&q=60)`,
                      }}
                    >
                      <div className="overlay">
                        <div className="overlay-content">
                          <Link href="/contact">
                            <a>Contact Us </a>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="service-card-content">
                      <div className="price-group text-center">
                        {item.discount > 0 ? (
                          <div className="d-flex justify-content-center">
                            <h6>&#x20B9;{item.serviceFee}</h6>
                            <h4> &#x20B9;{item.saleFee}</h4>
                          </div>
                        ) : item.saleFee == 0 ? (
                          <p>Free</p>
                        ) : (
                          <h4> &#x20B9; {item.saleFee}</h4>
                        )}
                      </div>
                      {item.popularity && (
                        <span className="popular">{item.popularity}</span>
                      )}

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
