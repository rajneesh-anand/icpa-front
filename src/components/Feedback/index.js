import React from "react";
import dynamic from "next/dynamic";
import htmr from "htmr";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  nav: false,
  loop: true,
  margin: 25,
  dots: true,
  center: true,
  autoplay: true,
  autoplayHoverPause: true,
  navText: [
    "<i class='ri-arrow-left-s-line'></i>",
    "<i class='ri-arrow-right-s-line'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
};

const ClientFeedback = () => {
  const [display, setDisplay] = React.useState(false);
  const [comments, setComments] = React.useState();

  React.useEffect(async () => {
    setDisplay(true);

    const res = await fetch("/api/testinomial");
    const result = await res.json();
    setComments(result.data);
  }, []);

  return (
    <>
      <div className="feedback-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">CLIENT REVIEWS</span>
            <h6>
              Some of our happy customers availing our services and products
            </h6>
          </div>

          {display &&
            (comments && comments.length > 0 ? (
              <OwlCarousel
                className="feedback-slides owl-carousel owl-theme"
                {...options}
              >
                {comments.map((item, index) => (
                  <div key={item.id} className="single-feedback-box">
                    <div className="client-info">
                      <div className="d-flex align-items-center">
                        <img
                          src={
                            item.image ? item.image : "/images/user/default.svg"
                          }
                          alt={item.name}
                        />
                        <div className="title">
                          <h3>{item.name}</h3>
                          <span>{item.company}</span>
                        </div>
                      </div>
                    </div>
                    {htmr(item.description)}
                    <div className="rating d-flex align-items-center justify-content-between">
                      <h5>{item.location}</h5>
                      <div>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            ) : (
              ""
            ))}
        </div>
      </div>
    </>
  );
};

export default ClientFeedback;
