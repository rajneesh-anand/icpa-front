import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  nav: false,
  loop: true,
  margin: 25,
  dots: false,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  navText: [
    "<i class='ri-arrow-left-s-line'></i>",
    "<i class='ri-arrow-right-s-line'></i>",
  ],
  responsive: {
    0: {
      items: 2,
    },
    576: {
      items: 3,
    },
    768: {
      items: 4,
    },
    992: {
      items: 6,
    },
  },
};

const PartnerPage = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <>
      <div className="partner-area ptb-50">
        <div className="container">
          <div className="partner-title">
            Services available for major online e-commerce platforms
          </div>

          {display ? (
            <OwlCarousel
              className="partner-slides owl-carousel owl-theme"
              {...options}
            >
              <div className="partner-item">
                <img src="/images/partner/partner1.png" alt="partner1" />
              </div>
              <div className="partner-item">
                <img src="/images/partner/partner2.png" alt="partner2" />
              </div>
              <div className="partner-item">
                <img src="/images/partner/partner3.png" alt="partner3" />
              </div>
              <div className="partner-item">
                <img src="/images/partner/partner4.png" alt="partner4" />
              </div>
              <div className="partner-item">
                <img src="/images/partner/partner5.png" alt="partner5" />
              </div>
              <div className="partner-item">
                <img src="/images/partner/partner6.png" alt="partner6" />
              </div>
              <div className="partner-item">
                <img src="/images/partner/partner7.png" alt="partner7" />
              </div>
              <div className="partner-item">
                <img src="/images/partner/partner8.png" alt="partner8" />
              </div>
              <div className="partner-item">
                <img src="/images/partner/partner9.png" alt="partner9" />
              </div>
            </OwlCarousel>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default PartnerPage;
