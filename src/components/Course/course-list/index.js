import React, { useState, useEffect } from "react";
import Link from "next/link";

const CourseList = ({ data }) => {
  const [count, setCount] = useState("0");
  const [number, setNumber] = useState("0");
  const duration = "3";

  useEffect(() => {
    let start = 0;
    // first three numbers from props
    const end = parseInt(number.substring(0, 3));
    // if zero, return
    if (start === end) return;

    // find duration per increment
    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    // timer increments start counter
    // then updates count
    // ends if start reaches end
    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);

    // dependency array
  }, [number, duration]);

  return (
    <div className="courses-area ptb-50">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            OUR TOP SELLING E-COMMERCE SELLER COURSES
          </span>

          <p>
            Explore all of our courses and pick your suitable ones to enroll and
            start learning with us. <br /> We ensure that you will never regret
            it!
          </p>
        </div>
        <div className="row justify-content-center mt-3">
          {data &&
            data.map((item, index) => (
              <div key={index} className="col-lg-12 col-md-12">
                <div className="single-course-box">
                  <div className="course-image">
                    <Link href={`/course/${item.slug}`}>
                      <a className="d-block image">
                        <img
                          src={
                            item.image ? item.image : "/images/blog-default.svg"
                          }
                          alt={item.courseName}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="course-content text-center">
                    <Link href={`/course/${item.slug}`}>
                      <a>{item.courseName}</a>
                    </Link>
                    <div className="rating">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <div className="rating-count">
                        <span>
                          {item.ratings} ( {item.numberOfRatings} Ratings )
                        </span>
                      </div>
                    </div>
                    <p>{item.description}</p>
                  </div>
                  {/* <div className="price shadow">&#x20B9;{item.courseFee}</div> */}
                  <div className="course-inf">
                    <div className="course-inf__item">
                      <div className="course-inf__title">
                        {item.numberOfEnrollments}+
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
                  <div className="text-center ptb-12">
                    <Link href={`/course/${item.slug}`}>
                      <a className="default-btn">View Details</a>
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

export default CourseList;
