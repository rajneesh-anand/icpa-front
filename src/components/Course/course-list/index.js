import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Tab, Tabs as TabsComponent, TabList, TabPanel } from "react-tabs";

const CourseList = () => {
  const [count, setCount] = useState("0");

  const number = "5321";
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
          <span className="sub-title">GO AT YOUR OWN PACE</span>
          <h2>Top Selling Courses</h2>
          <p>
            Explore all of our courses and pick your suitable ones to enroll and
            start learning with us! We ensure that you will never regret it!
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="single-course-box">
              <div className="course-image">
                <Link href={`/course`}>
                  <a className="d-block image">
                    <img src="/images/course_01.jpg" alt="course-01" />
                  </a>
                </Link>
              </div>
              <div className="course-content">
                <h3 title="The Complete Digital Marketing Course - 12 Courses in 1">
                  <a href="courses/56418231-8bf1-40c0-9ad1-b67dae108151.html">
                    The Complete Digital....{" "}
                  </a>
                </h3>
                <p>
                  Grow a Business Online From Scratch Make Money as an Affiliate
                  Marketer Land a High-Paying Job in Di...
                </p>
              </div>
              <div className="price shadow">&#x20B9;15</div>
              <div className="course-inf">
                <div class="course-inf__item">
                  <div class="course-inf__title">+{count}</div>
                  <div class="course-inf__txt">Followers</div>
                </div>

                <div class="course-inf__item">
                  <div class="course-inf__title">65</div>
                  <div class="course-inf__txt">Following</div>
                </div>
              </div>
              <div className="text-center ptb-12">
                <Link href={`/course`}>
                  <a className="default-btn">View Details</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
