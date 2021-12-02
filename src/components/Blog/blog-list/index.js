import React, { useState, useEffect } from "react";
import Link from "next/link";
import moment from "moment";

const BlogList = ({ data }) => {
  const fomatDate = (date_value) => {
    // let date = new Date(date_value);
    // return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    return moment(date_value).format("Do MMMM YYYY");
  };
  return (
    <div className="blog-area ptb-50">
      <div className="container">
        <div className="row justify-content-center">
          {data &&
            data.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="single-blog-post">
                  <div className="image">
                    <Link href={`/blog/${item.slug}`}>
                      <a className="d-block">
                        <img
                          src={
                            item.image ? item.image : "/images/blog-default.svg"
                          }
                          alt={item.title}
                        />
                      </a>
                    </Link>
                    {/* <Link href="/blog-grid">
                      <a className="tag">Branding</a>
                    </Link> */}
                  </div>
                  <div className="content">
                    <ul className="meta">
                      <li>
                        <i className="ri-time-line"></i>
                        {fomatDate(item.createdAt)}
                      </li>
                    </ul>
                    <h3>
                      <Link href={`/blog/${item.slug}`}>
                        <a>{item.title}</a>
                      </Link>
                    </h3>
                  </div>
                  <div className="read-more">
                    <Link href={`/blog/${item.slug}`}>
                      <a className="default-btn-sm">Read More</a>
                    </Link>
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
