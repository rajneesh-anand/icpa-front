import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const UserCourseList = ({ data }) => {
  return (
    <>
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h4>MY COURSES</h4>
          </div>
        </div>
      </div>
      <div className="courses-area" style={{ paddingTop: 8 }}>
        <div className="container">
          <div className="row justify-content-center">
            {data &&
              data.map((item, index) => (
                <div key={index} className="col-lg-6 col-md-6">
                  <div className="single-course-box">
                    <div className="course-image-user">
                      <Image
                        src={
                          item.image ? item.image : "/images/blog-default.svg"
                        }
                        alt={item.courseName}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="course-content text-center">
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
    </>
  );
};

export default UserCourseList;
