import { Fragment, useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/client";
import SocialIcon from "@/components/Social-Icon";
import Button from "@/components/Button";
import Logo from "@/components/Logo";
import MainMenu from "@/components/Menu/main-menu";
import MobileSideMenu from "@/components/Menu/mobile-menu";
import Link from "next/link";
import Overlay from "react-bootstrap/Overlay";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import PopoverBody from "react-bootstrap/PopoverBody";
import PopoverHeader from "react-bootstrap/PopoverHeader";

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
        <div className="header-top ">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12 text-center">
                <ul className="top-contact-info">
                  <li>
                    <i className="ri-phone-fill"></i> <span>+91-789945454</span>
                  </li>
                  <li>
                    {" "}
                    <i className="ri-whatsapp-fill"></i>
                    <span>+91-789945454</span>
                  </li>
                  <li>
                    {" "}
                    <i className="ri-mail-fill"></i>{" "}
                    <span>support@theicpaglobal.com</span>
                  </li>
                </ul>
                <p></p>
              </div>

              <div className="col-lg-6 col-md-6 d-none d-sm-block">
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

                  <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <MainMenu />
                  </div>
                  {session ? (
                    <div className="logged-profile">
                      <OverlayTrigger
                        trigger="click"
                        key="bottom"
                        placement="bottom"
                        rootClose
                        overlay={
                          <Popover id={`popover-positioned-bottom`}>
                            {/* <Popover.Header as="h3">{`Popover bottom`}</Popover.Header> */}
                            <Popover.Body>
                              <div className="profile-menu">
                                <ul>
                                  <li>
                                    <Link
                                      href="/user/account"
                                      activeClassName="active"
                                    >
                                      <a className="main-menu-link">
                                        My Account
                                      </a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/user/course"
                                      activeClassName="active"
                                    >
                                      <a className="main-menu-link">
                                        My Course
                                      </a>
                                    </Link>
                                  </li>
                                  <li>
                                    <button
                                      className="default-btn-sm"
                                      onClick={() => signOut()}
                                    >
                                      Sign Out
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </Popover.Body>
                          </Popover>
                        }
                      >
                        <i className="fas fa-user-circle"></i>
                      </OverlayTrigger>
                    </div>
                  ) : (
                    <div className="join-btn">
                      <Button
                        path={"/auth/signin"}
                        classOption="book-now-btn"
                        text="Join Now"
                      />
                    </div>
                  )}
                  <div className="hamburger-menu">
                    <button className="btn-menu" onClick={handleShow}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <MobileSideMenu show={show} handleClose={handleClose} />
    </Fragment>
  );
};

export default Header;
