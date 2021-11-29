import React, { useState, useEffect } from "react";
import Link from "next/link";

const HomeServicesPage = () => {
  const [services, setServices] = useState();
  useEffect(async () => {
    const res = await fetch(`${process.env.PUBLIC_URL}/api/services`);
    const result = await res.json();

    setServices(result.data);
  }, []);
  const truncate = (str, no_words) => {
    return str.split(" ").splice(0, no_words).join(" ") + "  ..... ";
  };
  return (
    <>
      <div className="home-services-area ptb-50 bg-F7F7FF">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">OUR KEY SERVICES</span>
            {/* <h2>Most Probably Included Best Features Ever</h2> */}
          </div>

          <div className="row justify-content-center">
            {services &&
              services.map((item, index) => {
                if (index < 6) {
                  return (
                    <div
                      key={index}
                      className="col-xl-4 col-lg-6 col-sm-6 col-md-6"
                    >
                      <div className="service-card">
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
                            <h6>{item.serviceName}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            <div className="col-xl-12 col-lg-12 col-sm-12 col-md-12">
              <div className="view-more-box">
                <Link href="/services">
                  <a className="default-btn">View More Services</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeServicesPage;
