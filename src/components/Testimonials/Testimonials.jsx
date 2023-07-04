import React from "react";
import css from "./Testimonials.module.css";
import testimonials from "../../assets/testimonials.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialsData } from "../../data/testimonials";

const Testimonials = () => {
  return (
    <div className={css.testimonials}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>Fechas Especiales Eventos</span>
        </div>
        <img src={testimonials} alt="" />
        <div className={css.container}>
          <span>Cumpleaños Aniversarios</span>
          <span>
            Día de la Madre - Pascuas - Navidad - Día de los Enamorados - Día de
            las Infancias - Día del Padre
          </span>
        </div>
      </div>
      <br />
      <div className={css.reviews}>Nuestros Clientes</div>
      <div className={css.carousel}>
        <Swiper
          SlidesPerView={3}
          SlidesPerGroup={1}
          spaceBetween={20}
          className={css.tCarousel}
        >
          {TestimonialsData.map((testimonial, i) => (
            <SwiperSlide
              SlidesPerView={3}
              SlidesPerGroup={1}
              spaceBetween={20}
              className={css.tCarousel}
            >
              <div className={css.testimonial}>
                <img src={testimonial.image} alt="" />
                <span>{testimonial.comment}</span>
                <hr />
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
