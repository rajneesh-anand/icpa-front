import React, { useState, useEffect } from "react";
import Link from "next/link";

const HomeCoursePage = () => {
  const [courses, setCourses] = useState();
  useEffect(async () => {
    let isMounted = true;
    const res = await fetch(`${process.env.API_URL}/course`);
    const result = await res.json();

    const coursesData = result.data.length > 0 ? result.data : null;
    if (isMounted) {
      setCourses(coursesData);
    }

    return () => {
      isMounted = false;
    };
  }, []);
  const truncate = (str, no_words) => {
    return str.split(" ").splice(0, no_words).join(" ") + "  ..... ";
  };
  return (
    <>
      <div className="pricing-area bg-gradient-color pt-100 pb-75">
        <div className="container">
          <div className="pricing-tabs">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12">
                <div className="pricing-section-title">
                  <span className="sub-title">E-LEARNING COURSE</span>
                  <h6>ONLINE SELLER COURSE</h6>
                  <p>
                    Explore all of our courses and pick your suitable ones to
                    enroll and start learning with us. We ensure that you will
                    never regret it !
                  </p>
                  <div className="btn-box">
                    <Link href="/courses">
                      <a className="default-btn">Explore More Courses</a>
                    </Link>
                  </div>
                </div>
              </div>
              {courses && (
                <div className="col-lg-8 col-md-12">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="single-pricing-table">
                        <div className="title">
                          <h3>{courses[0].courseName}</h3>

                          <div className="rating">
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <div className="rating-count">
                              <span>
                                {courses[0].ratings} ({" "}
                                {courses[0].numberOfRatings} Ratings )
                              </span>
                            </div>
                          </div>
                        </div>
                        <span className="popular">Most Popular</span>
                        {/* <div className="price">
                          $49 <span>/Month</span>
                        </div> */}
                        <div className="description">
                          <p>{truncate(courses[0].description, 50)}</p>
                        </div>
                        <div className="course-inf">
                          <div className="course-inf__item">
                            <div className="course-inf__title">
                              {courses[0].numberOfEnrollments}+
                            </div>
                            <div className="course-inf__txt">Enrollments</div>
                          </div>

                          <div className="course-inf__item">
                            <div className="course-inf__title">
                              {courses[0].duration}
                            </div>
                            <div className="course-inf__txt">Duration</div>
                          </div>
                          <div className="course-inf__item">
                            <div className="course-inf__title">
                              {courses[0].numberOfLectures}
                            </div>
                            <div className="course-inf__txt">
                              Total Lectures
                            </div>
                          </div>
                        </div>
                        <div className="text-center pt-1">
                          <Link href={`/course/${courses[0].slug}`}>
                            <a className="default-btn">View Details</a>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="single-pricing-table">
                        <div className="title">
                          <h3>{courses[1].courseName}</h3>

                          <div className="rating">
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <div className="rating-count">
                              <span>
                                {courses[1].ratings} ({" "}
                                {courses[1].numberOfRatings} Ratings )
                              </span>
                            </div>
                          </div>
                        </div>
                        <span className="popular">Most Popular</span>
                        {/* <div className="price">
                          $49 <span>/Month</span>
                        </div> */}
                        <div className="description">
                          <p>{truncate(courses[1].description, 50)}</p>
                        </div>
                        <div className="course-inf">
                          <div className="course-inf__item">
                            <div className="course-inf__title">
                              {courses[1].numberOfEnrollments}+
                            </div>
                            <div className="course-inf__txt">Enrollments</div>
                          </div>

                          <div className="course-inf__item">
                            <div className="course-inf__title">
                              {courses[1].duration}
                            </div>
                            <div className="course-inf__txt">Duration</div>
                          </div>
                          <div className="course-inf__item">
                            <div className="course-inf__title">
                              {courses[1].numberOfLectures}
                            </div>
                            <div className="course-inf__txt">
                              Total Lectures
                            </div>
                          </div>
                        </div>
                        <div className="text-center pt-1">
                          <Link href={`/course/${courses[1].slug}`}>
                            <a className="default-btn">View Details</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCoursePage;
