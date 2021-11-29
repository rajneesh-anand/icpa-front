import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Navigation]);

const AwardsPage = () => {
  return (
    <>
      <div className="awards-area pb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">AWARDS &amp; RECOGNITIONS</span>
            <h6>Our hard work and dedications recognitions </h6>
          </div>

          <Swiper
            loop={true}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            parallax={true}
            slidesPerView={"auto"}
            navigation={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={false}
            className="mySwiper screenshots-swiper-slides"
          >
            <SwiperSlide>
              <img src="/images/screenshots/award1.jpg" alt="award-1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/screenshots/award2.jpg" alt="award-2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/screenshots/award3.jpg" alt="award-3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/screenshots/awards4.jpg" alt="award-4" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default AwardsPage;
