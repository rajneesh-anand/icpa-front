import React from "react";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <>
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
            <h4>Do you have any question ? Kindly call us or mail us ! </h4>
          </div>
        </div>
      </div>
      <div className="contact-info-area pb-50">
        <div className="container">
          <div className="contact-info-inner">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-contact-info-box">
                  <div className="icon bg1">
                    <i className="ri-customer-service-2-line"></i>
                  </div>
                  <h3>
                    <a href="tel:+918810436602">(+91) 8810436602</a>
                  </h3>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-contact-info-box">
                  <div className="icon">
                    <i className="ri-earth-line"></i>
                  </div>
                  <h3>
                    <a href="mailto:theicpaglobal@gmail.com">
                      theicpaglobal@gmail.com
                    </a>
                  </h3>
                  <h3>
                    <a href="mailto:icpaglobalconsultants@gmail.com">
                      icpaglobalconsultants@gmail.com
                    </a>
                  </h3>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-contact-info-box">
                  <div className="icon bg2">
                    <i className="ri-map-pin-line"></i>
                  </div>
                  <h3>
                    B-1752 , SHASTRI NAGAR <br /> NEW DELHI 110052 - INDIA{" "}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
