import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className={css.container}>
      {/* Left Side */}
      <div className={css.h_sides}>
        <span className={css.text1}>Dulce y Salado</span>
        <div className={css.text2}>
          <span>
            Brownie con dulce de leche, Cheesecake con frutos rojos, Chipá, Mini
            Sandwichs, Bizcochos de queso...
          </span>
        </div>
      </div>
      {/* Middle */}
      <div className={css.wrapper}>
        <div className={css.blueCircle} />
        <img src={HeroImg} alt="" width={600} />
        <div className={css.cart2}>
          <RiShoppingBagFill />
          <div className={css.signup}>
            <span>Suscribite a nuestro Newsletter</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>10 Años en Devoto</span>
          <span>Más de 2 millones de productos vendidos</span>
        </div>
        <div className={css.customers}>
          <span>Miles de clientes felices</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
