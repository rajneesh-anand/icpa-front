import React, { useState, useEffect } from "react";
import Link from "next/link";

const BlogList = ({ data }) => {
  return (
    <div className="blog-area ptb-100">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">GO AT YOUR OWN PACE</span>
          <h2>Top Selling Courses</h2>
          <p>
            Explore all of our courses and pick your suitable ones to enroll and
            start learning with us! We ensure that you will never regret it!
          </p>
        </div>
        <div className="row justify-content-center">
          {data &&
            data.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="single-blog-post">
                  <div className="image">
                    <Link href={`/blog/${item.slug}`}>
                      <a className="d-block">
                        <img src={item.image} alt="blog" />
                      </a>
                    </Link>
                    <Link href="/blog-grid">
                      <a className="tag">Branding</a>
                    </Link>
                  </div>
                  <div className="content">
                    <ul className="meta">
                      <li>
                        <i className="ri-time-line"></i> {item.createdAt}
                      </li>
                    </ul>
                    <h3>
                      <Link href={`/blog/${item.slug}`}>
                        <a>{item.title}</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
