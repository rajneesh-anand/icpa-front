import React from "react";
import Link from "next/link";
import OffcanvasBody from "react-bootstrap/OffcanvasBody";
import OffcanvasTitle from "react-bootstrap/OffcanvasTitle";
import OffcanvasHeader from "react-bootstrap/OffcanvasHeader";
import Offcanvas from "react-bootstrap/Offcanvas";
import { signOut, useSession } from "next-auth/client";

const SideMenu = ({ show, handleClose }) => {
  const [session] = useSession();

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="start"
      style={{ width: "320px" }}
    >
      <OffcanvasHeader>
        <OffcanvasTitle style={{ width: "100%" }}>
          {!session ? (
            <>
              <div className="text-center">
                <i className="fas fa-user-circle" style={{ fontSize: 56 }}></i>
              </div>

              <div className="text-center">
                <Link href="/auth/signin">
                  <a className="default-btn-sm">Sign In</a>
                </Link>
              </div>
            </>
          ) : (
            <div className="sidebar-nav-top">
              <div className="text-center">
                <img src={session.user.image} className="rounded-circle" />
              </div>
              <div className="text-center">
                <p>{session.user.name}</p>
              </div>
              <div className="text-center">
                <Link href="/user/account">
                  <a>My Account</a>
                </Link>
                <Link href="/user/course">
                  <a>My Course</a>
                </Link>
                <button onClick={() => signOut()}>Sign Out</button>
              </div>
            </div>
          )}
        </OffcanvasTitle>
      </OffcanvasHeader>

      <OffcanvasBody>
        <div className="aside-navigation-area">
          <nav>
            <ul className="aside-menu">
              <li>
                <Link href="/services" activeClassName="active">
                  <a className="main-menu-link">Services &amp; Plans</a>
                </Link>
              </li>
              <li>
                <Link href="/courses" activeClassName="active">
                  <a className="main-menu-link">Online Seller Courses</a>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link className="sub-menu-link" href="/courses/amazon">
                      <a> Amazon Seller Course</a>
                    </Link>
                  </li>
                  <li>
                    <Link className="sub-menu-link" href="/courses/flipkart">
                      <a> Flipkart Seller Course</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/products" activeClassName="active">
                  <a className="main-menu-link">Products Suggestion</a>
                </Link>
              </li>
              <li>
                <Link href="/franchise" activeClassName="active">
                  <a className="main-menu-link">Franchise Opportunity</a>
                </Link>
              </li>
              <li>
                <Link href="/telephonic-consultation" activeClassName="active">
                  <a className="main-menu-link">Telephonic Consultancy</a>
                </Link>
              </li>
              <li>
                <Link href="/blogs" activeClassName="active">
                  <a className="main-menu-link">E-Commerce News Updates</a>
                </Link>
              </li>
              <li>
                <Link href="/courses/youtube" activeClassName="active">
                  <a className="main-menu-link">Free Youtube Videos</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="aside-footer-area ">
          <ul className="social-links">
            <li>Follow Us</li>
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
            {/* <li>
              <a href="https://github.com/" target="_blank">
                <i className="ri-github-fill"></i>
              </a>
            </li> */}
          </ul>
        </div>
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default SideMenu;
