import React from "react";
import { useSession } from "next-auth/client";
import Link from "next/link";
import { Tab, Tabs as TabsComponent, TabList, TabPanel } from "react-tabs";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

const Hiddenfrom = ({ formData }) => {
  console.log(formData);
  return (
    <form
      id="redFrom"
      method="post"
      action={`https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage?mid=${formData.mid}&orderId=${formData.orderId}`}
      name="paytm"
    >
      <input type="hidden" name="mid" value={formData.mid} />
      <input type="hidden" name="orderId" value={formData.orderId} />
      <input type="hidden" name="txnToken" value={formData.txnToken} />
    </form>
  );
};

const CourseDetail = ({ data }) => {
  const [session, loading] = useSession();
  const [isOpen, setIsOpen] = React.useState(true);
  const [paytmData, setPaytmData] = React.useState({
    mid: "",
    orderId: "",
    txnToken: "",
  });

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      const orderData = {
        name: session.user.name,
        email: session.user.email,
        course: data.courseName,
        type: "Online Course",
        amount: data.courseFee,
      };

      const response = await fetch("/api/paytm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
      const result = await response.json();
      console.log(result);
      setPaytmData({
        mid: "zWEMTK89662017572077",
        orderId: result.orderId,
        txnToken: result.txnToken,
      });
      document.getElementById("redFrom").submit();
    } catch (err) {
      console.log(err);
    }
  };

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
                <a>Courses</a>
              </li>
              <li className="active">{data[0].courseName}</li>
            </ul>
            <h2>{data.courseName}</h2>
            <div className="rating">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <div className="rating-count">
                <span>( {data.numberOfRatings} Ratings )</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="courses-details-area pb-100">
        <div className="courses-details-image">
          <img src="/images/courses/course-01.jpg" alt="course-thumb" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="courses-details-desc">
                <TabsComponent>
                  <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Curriculum</Tab>
                    <Tab>Instructor</Tab>
                    <Tab>Reviews</Tab>
                  </TabList>
                  <TabPanel>
                    <div className="courses-overview">
                      <h3>Course Description</h3>
                      <p>
                        Learn the modern way of building web applications Master
                        React&#x27;s Compositional Model Build an Instagram-like
                        Web App from the ground up! Build Interactive Web Pages
                        with self-contained Components Manage your
                        Application&#x27;s Data with Redux Get web development
                        jobs on freelancer sites
                      </p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="courses-curriculum">
                      <h3>Course Videos</h3>
                      <ul>
                        <li>
                          <a
                            className="d-flex justify-content-between align-items-center"
                            href="/courses"
                          >
                            <span className="courses-name">Introduction</span>
                            <div className="courses-meta">
                              <span className="status locked">
                                <i className="bx bx-lock"></i>
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            className="d-flex justify-content-between align-items-center"
                            href="/courses"
                          >
                            <span className="courses-name">
                              Market Research
                            </span>
                            <div className="courses-meta">
                              <span className="status locked">
                                <i className="bx bx-lock"></i>
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            className="d-flex justify-content-between align-items-center"
                            href="/courses"
                          >
                            <span className="courses-name">
                              Search Engine Optimization (SEO)
                            </span>
                            <div className="courses-meta">
                              <span className="status locked">
                                <i className="bx bx-lock"></i>
                              </span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="courses-instructor">
                      <div className="single-advisor-box">
                        <div className="row align-items-center">
                          <div className="col-lg-4 col-md-4">
                            <div className="advisor-image">
                              <img
                                src="/images/advisor/advisor1.jpg"
                                alt="EnvyTheme"
                              />
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-8">
                            <div className="advisor-content">
                              <h3>EnvyTheme</h3>
                              <span className="sub-title">
                                Head of Data Science, Pierian Data Inc.
                              </span>
                              <p>
                                EnvyTheme has a BS and MS in Mechanical
                                Engineering from Santa Clara University and
                                years of experience as a professional instructor
                                and trainer for Data Science and programming. He
                                has publications and patents in various fields
                                such as microfluidics, materials science, and
                                data science technologies. Over the course of
                                his career he has developed a skill set in
                                analyzing data and he hopes to use his
                                experience in teaching and data science to help
                                other people learn the power of programming the
                                ability to analyze data, as well as present the
                                data in clear and beautiful visualizations.
                              </p>
                              <ul className="social-link">
                                <li>
                                  <a
                                    href="https://facebook.com/EnvyTheme/"
                                    className="d-block"
                                    target="_blank"
                                  >
                                    <i className="bx bxl-facebook"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="https://twitter.com/envy_theme"
                                    className="d-block"
                                    target="_blank"
                                  >
                                    <i className="bx bxl-twitter"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="https://instagram.com/envytheme3s/"
                                    className="d-block"
                                    target="_blank"
                                  >
                                    <i className="bx bxl-instagram"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="https://linkedin.com/company/envytheme/"
                                    className="d-block"
                                    target="_blank"
                                  >
                                    <i className="bx bxl-linkedin"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </TabsComponent>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="courses-details-info">
                <div className="image">
                  <img
                    src="https://res.cloudinary.com/dev-empty/image/upload/v1611677211/dgfkptphczegy0k4ou9t.jpg"
                    alt="The Complete React Js &amp; Redux Course - Build Modern Web Apps"
                  />
                  <div
                    className="link-btn popup-youtube"
                    onClick={(e) => {
                      e.preventDefault();
                      openModal();
                    }}
                  >
                    <i className="ri-play-line"></i>
                  </div>
                  <div className="content">
                    <i className="ri-play-line"></i>
                    <span>Course Preview</span>
                  </div>
                </div>
                <ul className="info">
                  <li className="price">
                    <div className="d-flex justify-content-between align-items-center">
                      <span>
                        <i className="flaticon-tag"></i> Price
                      </span>
                      $16
                    </div>
                  </li>
                  <li>
                    <div className="d-flex justify-content-between align-items-center">
                      <span>
                        <i className="flaticon-teacher"></i> Instructor
                      </span>
                      EnvyTheme
                    </div>
                  </li>
                  <li>
                    <div className="d-flex justify-content-between align-items-center">
                      <span>
                        <i className="flaticon-time"></i> Duration
                      </span>
                      12 Hours
                    </div>
                  </li>
                  <li>
                    <div className="d-flex justify-content-between align-items-center">
                      <span>
                        <i className="flaticon-distance-learning"></i> Lessons
                      </span>
                      8
                    </div>
                  </li>
                  <li>
                    <div className="d-flex justify-content-between align-items-center">
                      <span>
                        <i className="flaticon-web"></i> Enrolled
                      </span>
                      0 students
                    </div>
                  </li>
                  <li>
                    <div className="d-flex justify-content-between align-items-center">
                      <span>
                        <i className="flaticon-lock"></i> Access
                      </span>
                      Lifetime
                    </div>
                  </li>
                </ul>
                {!loading && session ? (
                  <div className="btn-box">
                    <button className="default-btn" onClick={handlePayment}>
                      Enroll Now
                    </button>
                  </div>
                ) : (
                  <div className="btn-box">
                    <Link href="/auth/signin">
                      <a className="default-btn">Login To Enroll</a>
                    </Link>
                  </div>
                )}

                <div className="courses-share">
                  <div className="share-info">
                    <span>
                      Share This Course <i className="ri-share-fill"></i>
                    </span>
                    <ul className="social-link">
                      <li>
                        <a href="#" className="d-block" target="_blank">
                          <i className="bx bxl-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-block" target="_blank">
                          <i className="bx bxl-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-block" target="_blank">
                          <i className="bx bxl-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-block" target="_blank">
                          <i className="bx bxl-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        isOpen={!isOpen}
        videoId="bk7McNUjWgw"
        onClose={() => setIsOpen(!isOpen)}
      />
      <Hiddenfrom formData={paytmData} />
    </>
  );
};

export default CourseDetail;
