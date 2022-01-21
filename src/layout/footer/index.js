import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <Link href="/">
                  <a className="logo">
                    <img src="/images/logo-white.png" alt="logo" />
                  </a>
                </Link>

                <p>
                  Best solution for setting up an online business store on major
                  e-commerce platforms i.e Amazon, Flipkart
                </p>

                <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="ri-facebook-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="ri-twitter-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="ri-instagram-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.messenger.com/" target="_blank">
                      <i className="ri-messenger-fill"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-2 col-4">
              <div className="single-footer-widget pl-2">
                <h6>Useful Links</h6>
                <ul className="links-list">
                  <li>
                    <Link href="/about">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses/youtube">
                      <a>Free Videos</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <a>Refund Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <a>FAQ's</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/feedback">
                      <a>Reviews</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-2 col-4">
              <div className="single-footer-widget">
                <h6>Help &amp; Support</h6>
                <ul className="links-list">
                  <li>
                    <Link href="/services">
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Support</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <a>FAQ's</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-4">
              <div className="single-footer-widget">
                <h6>Legal</h6>
                <ul className="links-list">
                  <li>
                    <Link href="/privacy-policy">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <a>Return Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">
                      <a>Terms of Service</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-it-works">
                      <a>How It Works?</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className="col-lg-3 col-md-6 ">
              <div className="single-footer-widget">
                <h3>Newsletter</h3>
                <p>
                  Best solution for setting up an online business store on major
                  e-commerce platforms i.e Amazon, flipkart etc..,
                </p>

                <form
                  className="newsletter-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="text"
                    className="input-newsletter"
                    placeholder="Your Email"
                    name="EMAIL"
                    required
                  />
                  <button type="submit">
                    <i className="ri-send-plane-2-line"></i>
                  </button>
                </form>
              </div>
            </div> */}
          </div>

          <div className="copyright-area">
            <p>
              Copyright &copy; {currentYear}{" "}
              <strong>ICPA GLOBAL CONSULTANTS</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
