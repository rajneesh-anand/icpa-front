import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
} from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay, Scrollbar]);

function BannerPage() {
  const [data, setData] = useState([]);

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

  useEffect(async () => {
    const res = await fetch(`${process.env.API_URL}/awsupload/fetchObject`);
    const result = await res.json();
    setData(result.data);
  }, []);

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
        {data.length > 0 &&
          data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="banner-image-container">
                <Image src={item.url} alt={`banner-${index}`} layout="fill" />
              </div>
            </SwiperSlide>
          ))}
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
