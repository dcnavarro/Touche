import React from "react";
import css from "./Footer.module.css";
import logo from "../../assets/logo.png";
import {
  PhoneIcon,
  LocationMarkerIcon,
  BookmarkAltIcon,
  LinkIcon,
} from "@heroicons/react/outline";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={logo} alt="" />
          <span>Touché Pastelería Artesanal</span>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>¿Dónde estamos?</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>Vallejos 4371 Devoto CABA</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Teléfono</span>
            <span className={css.pngLine}>
              <PhoneIcon className={css.icon} />
              <span>011 3110 7017</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Redes Sociales</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />
              <span>Instagram </span>
            </span>
            <span className={css.pngLine}>
              <BookmarkAltIcon className={css.icon} />
              <span>Facebook </span>
            </span>
          </div>
        </div>
      </div>

      <div className={css.copyRight}>
        <span>Copyright @2023 by Touché </span>
        <span>Todos los derechos reservados</span>
      </div>
    </div>
  );
};

export default Footer;
