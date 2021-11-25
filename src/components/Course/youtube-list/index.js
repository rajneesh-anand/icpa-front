import React, { useState, useEffect } from "react";
import Link from "next/link";

const YoutubeList = ({ youtubeVideos }) => {
  return (
    <>
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Course</a>
              </li>
              <li className="active">Youtube Course</li>
            </ul>
            <h2>Watch Free Youtube Videos </h2>
          </div>
        </div>
      </div>

      <div className="courses-area ptb-50">
        <div className="container">
          {/* <div className="section-title">
            <span className="sub-title">
              WATCH OUR FREE YOUTUBE VIDEOS E-COMMERCE SELLER COURSES
            </span>
          </div> */}
          <div className="row">
            {youtubeVideos.items.map(({ id, snippet = {} }) => {
              console.log(snippet);
              const { title, thumbnails = {}, resourceId = {} } = snippet;

              const { medium } = thumbnails;
              return (
                <div key={resourceId.videoId} className="col-lg-4 col-md-4">
                  <div className="single-course-box">
                    <div className="text-center">
                      <a
                        href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                        target="_blank"
                      >
                        <p>
                          <img
                            width={medium.width}
                            height={medium.height}
                            src={medium.url}
                            alt=""
                          />
                        </p>
                      </a>
                    </div>
                    <div
                      className="text-center"
                      style={{ padding: "16px 8px", fontWeight: 600 }}
                    >
                      <Link
                        href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                      >
                        <a target="_blank">{title}</a>
                      </Link>
                    </div>
                    <div
                      className="text-center"
                      style={{ padding: "16px 8px", fontWeight: 600 }}
                    >
                      <Link
                        href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                      >
                        <a className="default-btn-sm" target="_blank">
                          Watch Now
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default YoutubeList;
