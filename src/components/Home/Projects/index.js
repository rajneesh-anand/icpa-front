import React from "react";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <>
      <div className="project-area ptb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-3 col-sm-3 col-md-3 col-6">
              <div className="features-box">
                <div className="icon">
                  <i className="ri-calendar-line"></i>
                </div>
                <h1>10+</h1>
                <h4>Years In Business</h4>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-3 col-md-3 col-6">
              <div className="features-box">
                <div className="icon bg2">
                  <i className="ri-team-line"></i>
                </div>
                <h1>500+</h1>
                <h4>Happy Clients</h4>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-3 col-md-3 col-6">
              <div className="features-box">
                <div className="icon bg3">
                  <i className="ri-fingerprint-line"></i>
                </div>
                <h1>10+</h1>
                <h4>Experts</h4>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-3 col-md-3 col-6">
              <div className="features-box">
                <div className="icon bg4">
                  <i className="ri-vip-diamond-line"></i>
                </div>
                <h1>5+</h1>
                <h4>Associates</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*     
      <div className="project-area ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-6 col-lg-3 col-md-3 col-sm-6 p-a30">
              <h2 className="m-t0 m-b10 font-weight-400 font-45">
                <i className="ti-bag m-r10"></i>
                <span className="counter">
                  <span>15</span>
                </span>
                +
              </h2>
              <h4 className="font-weight-300 m-t0">Years in Business</h4>
            </div>
            <div className="col-6 col-lg-3 col-md-3 col-sm-6 p-a30">
              <h2 className="m-t0 m-b10 font-weight-400 font-45">
                <i className="ti-user m-r10"></i>
                <span className="counter">
                  <span>700</span>
                </span>
                +
              </h2>
              <h4 className="font-weight-300 m-t0">Happy Clients</h4>
            </div>
            <div className="col-6 col-lg-3 col-md-3 col-sm-6 p-a30">
              <h2 className="m-t0 m-b10 font-weight-400 font-45">
                <i className="flaticon-users m-r10"></i>
                <span className="counter">
                  <span>50</span>
                </span>
                +
              </h2>
              <h4 className="font-weight-300 m-t0">Technical Experts</h4>
            </div>
            <div className="col-6 col-lg-3 col-md-3 col-sm-6 p-a30">
              <h2 className="m-t0 m-b10 font-weight-400 font-45">
                <i className="ti-mobile m-r10"></i>
                <span className="counter">
                  <span>200</span>
                </span>
                +
              </h2>
              <h4 className="font-weight-300 m-t0">Apps Delivered</h4>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ProjectsPage;
