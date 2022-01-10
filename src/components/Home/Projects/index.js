import React from "react";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <>
      <div className="project-area ptb-75">
        <div className="container">
          <div className="section-title mb-4">
            <span className="sub-title">OUR KEY ACHIEVEMENTS </span>
            {/* <h6>
              We are motivated to provide best possible services to our cliets.
            </h6> */}
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-3 col-sm-3 col-md-3 col-6">
              <div className="features-box">
                <div className="icon">
                  <i className="ri-calendar-line"></i>
                </div>
                <div className="detail">
                  <h1>10+</h1>
                  <h4>Years In Business</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-3 col-md-3 col-6">
              <div className="features-box">
                <div className="icon bg2">
                  <i className="ri-team-line"></i>
                </div>
                <div className="detail">
                  <h1>5000+</h1>
                  <h4>Happy Clients</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-3 col-md-3 col-6">
              <div className="features-box">
                <div className="icon bg3">
                  <i className="ri-fingerprint-line"></i>
                </div>
                <div className="detail">
                  <h1>100+</h1>
                  <h4>Experts</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-3 col-md-3 col-6">
              <div className="features-box">
                <div className="icon bg4">
                  <i className="ri-vip-diamond-line"></i>
                </div>
                <div className="detail">
                  <h1>100+</h1>
                  <h4>Associates</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-3 col-md-3 col-6">
              <div className="features-box">
                <div className="icon ">
                  <i className="ri-video-line"></i>
                </div>
                <div className="detail">
                  <h1>3200+</h1>
                  <h4>Trainings Completed</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-3 col-md-3 col-6">
              <div className="features-box">
                <div className="icon bg2">
                  <i className="ri-amazon-line"></i>
                </div>
                <div className="detail">
                  <h1>250+</h1>
                  <h4>Flex Seller</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-3 col-md-3 col-6">
              <div className="features-box">
                <div className="icon bg3">
                  <i className="ri-amazon-line"></i>
                </div>
                <div className="detail">
                  <h1>1000+</h1>
                  <h4>Prime Seller</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-3 col-md-3 col-6">
              <div className="features-box">
                <div className="icon bg4">
                  <i className="ri-account-box-line"></i>
                </div>
                <div className="detail">
                  <h1>150+</h1>
                  <h4>Accounts Reinstate Re-Active</h4>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-sm-3 col-md-3 col-6">
              <div className="features-box">
                <div className="icon ">
                  <i className="ri-creative-commons-nc-line"></i>
                </div>
                <div className="detail">
                  <h4>Free Of Cost Consultation</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
