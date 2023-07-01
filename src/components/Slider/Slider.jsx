import React from "react";
import "./Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { SliderProducts } from "../../data/products";
// swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <div className="s-container">
      <Swiper
        modules={(Pagination, Navigation)}
        className="mySwiper"
        navigation={true}
        loopFillGroupWithBlank={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
      >
        {SliderProducts.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="left-s">
              <div className="name">
                <span>{""}</span>
                <br />
                <span>{slide.name}</span>
                <br />
                <span>{slide.detail}</span>
              </div>
              <span>ARS${slide.price}</span>
              <div>Comprar</div>
              <br />
            </div>
            <img
              src={slide.img}
              alt="product"
              className="img-p"
              width={600}
              height={500}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
