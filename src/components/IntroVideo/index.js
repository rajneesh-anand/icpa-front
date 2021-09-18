import React from "react";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});
import Link from "next/link";

const IntroVideo = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="video-area ptb-50">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-3">
              <div className="advisor-image">
                <img
                  src="/images/advisor/advisor.jpg"
                  alt="advisor"
                  height={336}
                  width={222}
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="advisor-content">
                <h4>Vinay Gupta</h4>
                <span className="sub-title">
                  Founder &amp; Director - ICPA Global Consultants
                </span>
                <p>
                  EnvyTheme has a BS and MS in Mechanical Engineering from Santa
                  Clara University and years of experience as a professional
                  instructor and trainer for Data Science and programming. He
                  has publications and patents in various fields such as
                  microfluidics, materials science, and data science
                  technologies. Over the course of his career he has developed a
                  skill set in analyzing data and he hopes to use his experience
                  present the data in clear and beautiful visualizations.
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

            <div className="col-lg-5 col-md-5">
              <div className="intro-video-box">
                <img src="/images/video/video-img1.jpg" alt="video-img" />

                <div
                  onClick={(e) => {
                    e.preventDefault();
                    openModal();
                  }}
                  className="video-btn popup-youtube"
                >
                  <i className="ri-play-line"></i>
                </div>

                <div className="shape">
                  <img
                    className="shape10"
                    src="/images/shape/shape13.png"
                    alt="image"
                  />
                  <img
                    className="shape11"
                    src="/images/shape/shape14.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* If you want to change the video need to update videoID */}
      <ModalVideo
        channel="youtube"
        isOpen={!isOpen}
        videoId="bk7McNUjWgw"
        onClose={() => setIsOpen(!isOpen)}
      />
    </>
  );
};

export default IntroVideo;
