import React, { useState, useEffect } from "react";
import Link from "next/link";

const UserCourseList = ({ data }) => {
  return (
    <div className="courses-area ptb-50">
      <div className="container">
        <div className="row">
          {data &&
            data.map((item, index) => (
              <div key={index} className="col-lg-6 col-md-6">
                <div className="single-course-box">
                  <div className="course-image">
                    <Link href={`/course/${item.slug}`}>
                      <a className="d-block image">
                        <img src={item.images} alt={item.courseName} />
                      </a>
                    </Link>
                  </div>
                  <div className="course-content">
                    <Link href={`/course/${item.slug}`}>
                      <a>{item.courseName}</a>
                    </Link>
                    <p>{item.description}</p>
                  </div>
                  {/* <div className="price shadow">&#x20B9;{item.courseFee}</div> */}
                  {/* <div className="course-inf">
                    <div className="course-inf__item">
                      <div className="course-inf__title">
                        +{item.numberOfEnrollments}
                      </div>
                      <div className="course-inf__txt">Enrollments</div>
                    </div>

                    <div className="course-inf__item">
                      <div className="course-inf__title">{item.duration}</div>
                      <div className="course-inf__txt">Duration</div>
                    </div>
                    <div className="course-inf__item">
                      <div className="course-inf__title">
                        {item.numberOfLectures}
                      </div>
                      <div className="course-inf__txt">Total Lectures</div>
                    </div>
                  </div>
                 
                  */}
                  <div className="text-center ptb-12">
                    <Link href={`/user/course/${item.id}/${item.slug}`}>
                      <a className="default-btn">Watch Videos</a>
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

export default UserCourseList;
