import React from "react";
import Link from "next/link";

const About = ({ data }) => {
  return (
    <div className="about-page-area">
      <div className="page-title-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-content text-center">
                <h4 className="page-title">About Us</h4>
                <Link href="/">
                  <a className="title">ICPA GLOBAL CONSULTANT</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {data && (
        <div className="service-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-xl-8 mb-4" data-aos="fade-up">
                <h3 className="title">{data[0].title}</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: data[0].excerpt,
                  }}
                />
              </div>
              <div className="col-lg-4 col-xl-3 offset-xl-1 mb-4">
                <h3 className="title">{data[1].title}</h3>
                <ul>
                  {data[1].pagelinkText &&
                    data[1].pagelinkText.map((single, index) => {
                      return (
                        <li key={index}>
                          <Link href={single.link}>
                            <a>{single.text}</a>
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="page-title-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-content text-center">
                <h4 className="page-title">Our Team</h4>
                <Link href="/">
                  <a className="title">MEET OUR EXPERTS TEAM MEMBER</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-area mt-4 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            {data[2].team &&
              data[2].team.map((single, key) => {
                return (
                  <div key={key} className="col-lg-3 col-md-6 col-sm-6">
                    <div className="single-team-member">
                      <div className="image">
                        <img src={single.image} alt={single.name} />
                      </div>
                      <div className="content">
                        <h3>{single.name}</h3>
                        <span>{single.designation}</span>
                      </div>
                      <ul className="social-links">
                        <li>
                          <a
                            href={single.facebook_handle}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="ri-facebook-fill"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href={single.facebook_handle}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="ri-linkedin-fill"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href={single.facebook_handle}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="ri-twitter-fill"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href={single.facebook_handle}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="ri-instagram-line"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
