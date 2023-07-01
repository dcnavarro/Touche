import React from "react";
import css from "./Virtual.module.css";
import shade from "../../assets/shade.png";
import ReactCompareImage from "react-compare-image";
import before from "../../assets/before.png";
import after from "../../assets/after.png";

const Virtual = () => {
  return (
    <div className={css.Virtual}>
      <div className={css.left}>
        <span>Calidad garantizada</span>
        <span>Utilizamos las mejores materias primas!</span>
        <span>Somos tu pastelería de confianza</span>
        <img src={shade} alt="" />
      </div>
      <div className={css.right}>
        <div className={css.wrapper}>
          <ReactCompareImage leftImage={before} rightImage={after} />
        </div>
      </div>
    </div>
  );
};

export default Virtual;
