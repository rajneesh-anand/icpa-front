import React, { useState, useEffect } from "react";
import Link from "next/link";
import moment from "moment";
import htmr from "htmr";
import Image from "next/image";

const BlogList = ({ data }) => {
  const fomatDate = (date_value) => {
    // let date = new Date(date_value);
    // return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    return moment(date_value).format("Do MMMM YYYY");
  };

  const truncate = (str, no_words) => {
    let truncatedString = str.split(" ").splice(0, no_words).join(" ") + " ";
    return htmr(truncatedString);
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
                    <Image
                      src={item.image ? item.image : "/images/blog-default.svg"}
                      alt={item.title}
                      layout="fill"
                    />
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
                    <div style={{ minHeight: "196px" }}>
                      {truncate(item.content, 40)}
                    </div>
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
