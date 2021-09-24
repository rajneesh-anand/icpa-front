import React from "react";
import Link from "@/utils/ActiveLink";

const MainMenu = () => {
  return (
    <nav>
      <ul className="main-menu">
        <li>
          <Link href="/services" activeClassName="active">
            <a className="main-menu-link">Services</a>
          </Link>
        </li>
        <li>
          <Link href="/membership" activeClassName="active">
            <a className="main-menu-link">Membership Plan</a>
          </Link>
        </li>
        <li>
          <Link href="/products" activeClassName="active">
            <a className="main-menu-link">Products Suggestion</a>
          </Link>
        </li>
        <li>
          <Link href="/courses" activeClassName="active">
            <a className="main-menu-link">Online Seller Courses</a>
          </Link>
          <ul className="sub-menu">
            <li>
              <Link className="sub-menu-link" href="/course/amazon-seller">
                <a> Amazon Seller Course</a>
              </Link>
            </li>
            <li>
              <Link className="sub-menu-link" href="/course/flipkart-seller">
                <a> Flipkart Seller Course</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            href={process.env.PUBLIC_URL + "/telephonic-consultation"}
            activeClassName="active"
          >
            <a className="main-menu-link">Telephonic Consultancy</a>
          </Link>
        </li>
        <li>
          <Link
            href={process.env.PUBLIC_URL + "/blogs"}
            activeClassName="active"
          >
            <a className="main-menu-link">E-Commerce News Updates</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
