import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/client";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Tab, Tabs as TabsComponent, TabList, TabPanel } from "react-tabs";
import htmr from "htmr";

const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

const Hiddenfrom = ({ formData }) => {
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
  const [chapters, setChapters] = useState();
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

  useEffect(async () => {
    let isMounted = true;
    const res = await fetch(
      `${process.env.PUBLIC_URL}/api/chapters/${data.slug}`
    );
    const result = await res.json();
    const chaptersData = result.data.length > 0 ? result.data : null;
    if (isMounted) {
      setChapters(chaptersData);
    }

    return () => {
      isMounted = false;
    };
  }, []);

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
              <li className="active">{data.courseName}</li>
            </ul>
            <h2>{data.courseName}</h2>
            <div className="rating">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <div className="rating-count">
                <span style={{ color: "white" }}>
                  {" "}
                  {data.ratings} ( {data.numberOfRatings} Ratings )
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="courses-details-area pb-100">
        <div className="courses-details-image">
          <img
            src={data.image ? data.image : "/images/courses/course-01.jpg"}
            alt="course-thumb"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="courses-details-desc">
                <TabsComponent>
                  <TabList>
                    <Tab>Curriculum</Tab>
                    <Tab>Course Overview</Tab>
                  </TabList>
                  <TabPanel>
                    <div className="courses-curriculum">
                      <h3>Course Videos</h3>
                      <ul>
                        {chapters &&
                          chapters.map((item, index) => (
                            <li
                              key={index}
                              className="d-flex justify-content-between align-items-center"
                            >
                              <span className="courses-name">{item.title}</span>
                              <div className="courses-meta">
                                <span className="status locked">
                                  <i className="bx bx-lock"></i>
                                </span>
                              </div>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="courses-overview">
                      <h3>Course Description</h3>
                      {htmr(data.details)}
                    </div>
                  </TabPanel>
                </TabsComponent>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="courses-details-info">
                <div className="image">
                  <img
                    src={
                      chapters ? chapters[0].poster : "/images/blog-default.svg"
                    }
                    alt="poster"
                  />
                  <div
                    className="link-btn popup-youtube"
                    onClick={(e) => {
                      e.preventDefault();
                      openModal();
                    }}
                  >
                    {/* <i className="ri-play-line"></i> */}
                  </div>
                  <div className="content">
                    <i className="ri-play-line"></i>
                    <span>Course Preview</span>
                  </div>
                </div>
                <ul className="info">
                  <li className="price">
                    <div className="d-flex ">
                      <i className="fas fa-tags"></i>
                      <h6
                        style={{
                          paddingLeft: 4,
                        }}
                      >
                        Course Fee
                      </h6>
                      {data.discount > 0 ? (
                        <div
                          style={{ marginLeft: "auto", display: "inline-flex" }}
                        >
                          <h6
                            style={{
                              textDecoration: "line-through",
                              paddingTop: 8,
                              paddingRight: 4,
                            }}
                          >
                            &#x20B9;{data.courseFee}
                          </h6>
                          <h3> &#x20B9;{data.saleFee}</h3>
                        </div>
                      ) : (
                        <h6> &#x20B9;{data.courseFee}</h6>
                      )}
                    </div>
                  </li>

                  <li className="price">
                    <div className="d-flex ">
                      <i className="fas fa-clock"></i>
                      <h6
                        style={{
                          paddingLeft: 4,
                        }}
                      >
                        Duration
                      </h6>
                      <h5 style={{ marginLeft: "auto" }}>{data.duration}</h5>
                    </div>
                  </li>
                  <li className="price">
                    <div className="d-flex ">
                      <i className="fas fa-play-circle"></i>
                      <h6
                        style={{
                          paddingLeft: 4,
                        }}
                      >
                        Lectures
                      </h6>
                      <h5 style={{ marginLeft: "auto" }}>
                        {data.numberOfLectures}
                      </h5>
                    </div>
                  </li>
                  <li className="price">
                    <div className="d-flex">
                      <i className="fas fa-users"></i>
                      <h6
                        style={{
                          paddingLeft: 4,
                        }}
                      >
                        Enrolled Clients
                      </h6>
                      <h5 style={{ marginLeft: "auto" }}>
                        {data.numberOfEnrollments} +
                      </h5>
                    </div>
                  </li>
                  <li className="price">
                    <div className="d-flex">
                      <i className="fas fa-lock"></i>
                      <h6
                        style={{
                          paddingLeft: 4,
                        }}
                      >
                        Course Validity
                      </h6>
                      <h5 style={{ marginLeft: "auto" }}>{data.validity}</h5>
                    </div>
                  </li>
                </ul>
                {!loading && session ? (
                  <div className="btn-box text-center">
                    <button className="default-btn" onClick={handlePayment}>
                      Enroll Now
                    </button>
                  </div>
                ) : (
                  <div className="btn-box text-center">
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
      {chapters && (
        <ModalVideo
          channel="custom"
          url={chapters && chapters[0].video}
          isOpen={!isOpen}
          onClose={() => setIsOpen(!isOpen)}
        />
      )}
      <Hiddenfrom formData={paytmData} />
    </>
  );
};

export default CourseDetail;
