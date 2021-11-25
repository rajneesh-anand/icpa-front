import React, { useState, useEffect, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import Intro from "./intro";

SwiperCore.use([Autoplay]);

function BannerPage({ data }) {
  const swiperOption = {
    loop: true,
    speed: 600,
    spaceBetween: 0,
    slidesPerView: 1,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".hero-slider .swiper-button-next",
      prevEl: ".hero-slider .swiper-button-prev",
    },
  };

  return (
    <div className="hero-slider-area">
      <Swiper effect="fade" className="hero-slider" {...swiperOption}>
        {data &&
          data.map(
            (item, index) =>
              index > 0 && (
                <SwiperSlide key={index}>
                  <Intro data={item} />
                </SwiperSlide>
              )
          )}
        <div className="swiper-button-prev">
          <i className="icofont-arrow-left"></i>
        </div>
        <div className="swiper-button-next">
          <i className="icofont-arrow-right"></i>
        </div>
      </Swiper>
    </div>
  );
}

export default BannerPage;
