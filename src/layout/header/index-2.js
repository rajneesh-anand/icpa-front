// import PropTypes from "prop-types";
// import { Fragment, useEffect, useState } from "react";
// import Logo from "../../components/logo";
// import Profile from "../../components/profile";
// import SideBarMenu from "../../components/sidebar-menu";
// import SideBarCart from "../../components/sidebar-cart";
// import ActiveLink from "../../utils/activeLink";
// import { useCart } from "../../contexts/cart/use-cart";
// import { GiShoppingBag } from "react-icons/gi";
// import { IoCallSharp, IoMailSharp, IoLogoWhatsapp } from "react-icons/io5";

// const Header = ({ classOption }) => {
//   const { cartItemsCount } = useCart();
//   const [show, setShow] = useState(false);
//   const [showCart, setShowCart] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const handleCloseCart = () => setShowCart(false);
//   const handleShowCart = () => setShowCart(true);

//   const [ofcanvasShow, setOffcanvasShow] = useState(false);
//   const onCanvasHandler = () => {
//     setOffcanvasShow((prev) => !prev);
//   };
//   const [searchbarShow, setSearchbarShow] = useState(false);
//   const onSearchHandler = () => {
//     setSearchbarShow((prev) => !prev);
//   };
//   const [scroll, setScroll] = useState(0);
//   const [headerTop, setHeaderTop] = useState(0);
//   useEffect(() => {
//     const header = document.querySelector(".header-area");
//     setHeaderTop(header.offsetTop);
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleScroll = ({}) => {
//     setScroll(window.scrollY);
//   };
//   return (
//     <Fragment>
//       <div className="top-nav">
//         <div className="container-fluid">
//           <div className="row ">
//             <div className="col-auto">
//               <div>
//                 <IoCallSharp /> +91-789945454
//               </div>
//             </div>
//             <div className="col-auto">
//               <div>
//                 <IoMailSharp /> demo@demo.com
//               </div>
//             </div>
//             <div className="col-auto">
//               <div>
//                 <IoLogoWhatsapp /> +91-78445454
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <header
//         className={`header-area header-default sticky-header ${classOption} ${
//           scroll > headerTop ? "sticky" : ""
//         }`}
//       >
//         <div className="container-fluid">
//           <div className="row align-items-center justify-content-between">
//             <div className="col-auto">
//               <div className="header-action-area">
//                 <button className="btn-menu" onClick={handleShow}>
//                   <span></span>
//                   <span></span>
//                   <span></span>
//                 </button>
//                 <span className="menu-text">Menu</span>
//               </div>
//             </div>

//             <div className="col-auto">
//               <div className="header-logo-area">
//                 <Logo image={`${process.env.PUBLIC_URL}/img/logo.png`} />
//               </div>
//             </div>
//             <div className="col">
//               <div className="topNav">
//                 <div>
//                   <ActiveLink href="/mobile" activeClassName="active-link">
//                     <a>Mobile</a>
//                   </ActiveLink>
//                 </div>
//                 <div>
//                   <ActiveLink href="/laptop" activeClassName="active-link">
//                     <a>Laptop</a>
//                   </ActiveLink>
//                 </div>
//                 <div>
//                   <ActiveLink href="/camera" activeClassName="active-link">
//                     <a>Camera</a>
//                   </ActiveLink>
//                 </div>
//                 <div>
//                   <ActiveLink href="/accessories" activeClassName="active-link">
//                     <a>Accessories</a>
//                   </ActiveLink>
//                 </div>
//                 <div>
//                   <ActiveLink href="/others" activeClassName="active-link">
//                     <a>Others</a>
//                   </ActiveLink>
//                 </div>

//                 {/* <div>
//                   <ActiveLink href="/query" activeClassName="active-link">
//                     <a>Send Your Queries ?</a>
//                   </ActiveLink>
//                 </div> */}
//               </div>
//             </div>
//             <div className="col-auto">
//               <button className="cart-button" onClick={handleShowCart}>
//                 <GiShoppingBag />
//                 {cartItemsCount > 0 && <span>{cartItemsCount}</span>}
//               </button>
//             </div>
//             <div className="col-auto header-profile">
//               <Profile />
//             </div>
//           </div>
//         </div>
//       </header>
//       <SideBarMenu show={show} handleClose={handleClose} />
//       <SideBarCart show={showCart} handleClose={handleCloseCart} />
//     </Fragment>
//   );
// };

// Header.propTypes = {
//   classOption: PropTypes.string,
// };

// Header.defaultProps = {
//   classOption: "header-area header-default sticky-header",
// };

// export default Header;

import React from "react";
import Link from "@/utils/ActiveLink";
import { signOut, useSession } from "next-auth/client";
import SideMenu from "@/components/Sidemenu";

const Header = () => {
  const [menu, setMenu] = React.useState(true);
  const [show, setShow] = React.useState(false);
  const [session, loading] = useSession();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="top-nav">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-auto">
              <div className="contact-icons">
                <ul>
                  <li>
                    <i className="ri-phone-fill"></i> <span>+91-789945454</span>
                  </li>
                  <li>
                    <i className="ri-mail-fill"></i> demo@demo.com
                  </li>
                  <li>
                    <i className="ri-whatsapp-fill"></i> +91-78445454
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-auto">
              <ul className="social-icons">
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
                  <a href="https://www.linkedin.com/" target="_blank">
                    <i className="ri-linkedin-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.messenger.com/" target="_blank">
                    <i className="ri-messenger-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/" target="_blank">
                    <i className="ri-github-fill"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="navbar" className="navbar-area">
        <div className="texap-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
              <Link href="/">
                <a className="navbar-brand">
                  <img src="/images/logo.png" alt="logo" />
                </a>
              </Link>
              <div className="header-action-area">
                <button className="btn-menu" onClick={handleShow}>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="#" activeClassName="active">
                      <a
                        onClick={(e) => e.preventDefault()}
                        className="dropdown-toggle nav-link"
                      >
                        Home
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Home Demo - 1
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index-2" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Home Demo - 2
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index-3" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Home Demo - 3
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index-4" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Home Demo - 4
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index-5" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Home Demo - 5
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index-6" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Home Demo - 6
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#">
                      <a
                        onClick={(e) => e.preventDefault()}
                        className="dropdown-toggle nav-link"
                      >
                        About Us
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/about-simple" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            About Simple
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/about-modern" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            About Modern
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item megamenu">
                    <Link href="#">
                      <a
                        onClick={(e) => e.preventDefault()}
                        className="dropdown-toggle nav-link"
                      >
                        Pages
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <div className="container">
                          <div className="row">
                            <div className="col">
                              <h6 className="submenu-title">Pages I</h6>
                              <ul className="megamenu-submenu">
                                <li>
                                  <Link href="/team" activeClassName="active">
                                    <a onClick={toggleNavbar}>Team 1</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/team-2" activeClassName="active">
                                    <a onClick={toggleNavbar}>Team 2</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/how-it-works"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>How It Works</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/gallery"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>Gallery</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/services"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>Services</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/pricing"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>Pricing Plan</a>
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              <h6 className="submenu-title">Pages II</h6>
                              <ul className="megamenu-submenu">
                                <li>
                                  <Link
                                    href="/feedback"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>Reviews</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/sign-in"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>Sign In</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/sign-up"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>Sign Up</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/forget-password"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>
                                      Forget Password
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/privacy-policy"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>Privacy Policy</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/terms-conditions"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>
                                      Terms & Conditions
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              <h6 className="submenu-title">Pages III</h6>
                              <ul className="megamenu-submenu">
                                <li>
                                  <Link
                                    href="/screenshots"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>Screenshots</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/faq" activeClassName="active">
                                    <a onClick={toggleNavbar}>FAQ</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/coming-soon"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>Coming Soon</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/404" activeClassName="active">
                                    <a onClick={toggleNavbar}>404 Error Page</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/app-download"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>App Download</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/contact"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>Contact Us</a>
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                className="d-block p-0"
                              >
                                <img src="/images/navbar.jpg" alt="image" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#">
                      <a
                        onClick={(e) => e.preventDefault()}
                        className="dropdown-toggle nav-link"
                      >
                        Features
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/features" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Features 1
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/features-2" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Features 2
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#">
                      <a
                        onClick={(e) => e.preventDefault()}
                        className="dropdown-toggle nav-link"
                      >
                        Blog
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/blog-grid" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Blog Grid
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-right-sidebar"
                          activeClassName="active"
                        >
                          <a onClick={toggleNavbar} className="nav-link">
                            Blog Right Sidebar
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-left-sidebar"
                          activeClassName="active"
                        >
                          <a onClick={toggleNavbar} className="nav-link">
                            Blog Left Sidebar
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/blog-details" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Blog Details
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Contact
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="others-options">
                <Link href="/contact">
                  <a className="default-btn">Get Started</a>
                </Link>
              </div>
              {session && (
                <div className="collapse navbar-collapse">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link href="#" activeClassName="active">
                        <a
                          onClick={(e) => e.preventDefault()}
                          className="dropdown-toggle nav-link"
                        >
                          <i className="bx bxs-user-circle"></i>
                        </a>
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <p>{session.user.name}</p>
                        </li>

                        <li className="nav-item">
                          <button
                            type="button"
                            className="btn btn-outline-danger btn-sm"
                            onClick={() =>
                              signOut({ callbackUrl: "http://localhost:3000" })
                            }
                          >
                            Sign Out
                          </button>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              )}
            </nav>
          </div>
        </div>
      </div>
      <SideMenu show={show} handleClose={handleClose} />
    </>
  );
};

export default Header;
