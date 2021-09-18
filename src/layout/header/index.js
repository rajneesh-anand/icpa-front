import { Fragment, useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/client";
import SocialIcon from "@/components/Social-Icon";
import Button from "@/components/Button";
import Logo from "@/components/Logo";
import MainMenu from "@/components/Menu/main-menu";
import MobileSideMenu from "@/components/Menu/mobile-menu";
import Link from "next/link";

const Header = () => {
  const [show, setShow] = useState(false);
  const [session, loading] = useSession();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector(".header-middle");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = ({}) => {
    setScroll(window.scrollY);
  };

  return (
    <Fragment>
      <header className="header">
        <div className="header-top d-none d-lg-block">
          <div className="container">
            <div className="row row-cols-12">
              <div className="col">
                <p>
                  <i className="ri-phone-fill"></i> <span>+91-789945454</span>
                </p>
              </div>
              <div className="col">
                <p>
                  <i className="ri-mail-fill"></i> <span>demo@demo.com</span>
                </p>
              </div>
              <div className="col">
                <p>
                  <i className="ri-mail-fill"></i> <span>demo@demo.com</span>
                </p>
              </div>

              <div className="col">
                <ul className="social-links text-end">
                  <li>
                    <SocialIcon
                      path="https://twitter.com/"
                      icon="icofont-twitter"
                    />
                  </li>
                  <li>
                    <SocialIcon
                      path="https://www.facebook.com/"
                      icon="icofont-facebook"
                    />
                  </li>
                  <li>
                    <SocialIcon
                      path="https://www.instagram.com/"
                      icon="icofont-instagram"
                    />
                  </li>
                  <li>
                    <SocialIcon
                      path="https://rss.com/"
                      icon="icofont-rss-feed"
                    />
                  </li>
                  <li>
                    <SocialIcon
                      path="https://www.youtube.com/"
                      icon="icofont-play-alt-1"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={`header-middle ${scroll > headerTop ? "sticky" : ""}`}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="header-middle-content">
                  <div className="header-logo">
                    <Logo image={`/images/logo.png`} />
                  </div>

                  <div className="hamburger-menu">
                    <button className="btn-menu" onClick={handleShow}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>

                  <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <MainMenu />

                    <Button
                      path={"/"}
                      classOption="book-now-btn"
                      text="Join Now"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          className={`header-bottom sticky-header d-none d-lg-block ${
            scroll > headerTop ? "sticky" : ""
          }`}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <MainMenu />
                  <Button
                    path={process.env.PUBLIC_URL + "/"}
                    classOption="book-now-btn"
                    text="book an appointment"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </header>

      <MobileSideMenu show={show} handleClose={handleClose} />
    </Fragment>
  );
};

export default Header;
