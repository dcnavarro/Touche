import React from "react";
import css from "./Header.module.css";
import Logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";

const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="" />
        <span>Touché {""} Pastelería Artesanal</span>
      </div>
      <div className={css.right}>
        <div className={css.menu}>
          <ul className={css.menu}>
            <li>Dulce</li>
            <li>Salado</li>
            <li>Fechas Especiales</li>
            <li>Eventos</li>
            <li>Novedades</li>
          </ul>
        </div>
        <input type="text" className={css.search} placeholder="Buscar" />
        <CgShoppingBag className={css.cart} />
      </div>
    </div>
  );
};

export default Header;
