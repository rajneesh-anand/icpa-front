import React, { useState, useEffect, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
} from "swiper";
import Intro from "./intro";

SwiperCore.use([Navigation, Pagination, Autoplay, Scrollbar]);

function BannerPage({ data }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
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
      prevEl: prevRef.current ? prevRef.current : undefined,
      nextEl: nextRef.current ? nextRef.current : undefined,
    },
  };

  return (
    <div className="hero-slider-area">
      <Swiper
        effect="fade"
        className="hero-slider"
        onInit={(swiper) => {
          const navigation = swiper.params.navigation;
          navigation.prevEl = prevRef.current;
          navigation.nextEl = nextRef.current;
          swiper.update();
        }}
        {...swiperOption}
      >
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
          <i className="icofont-arrow-left" ref={prevRef}></i>
        </div>
        <div className="swiper-button-next">
          <i className="icofont-arrow-right" ref={nextRef}></i>
        </div>
      </Swiper>
    </div>
  );
}

export default BannerPage;
