import React from "react";
import css from "./Products.module.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Products = () => {
  const [parent] = useAutoAnimate();
  const [MenuProducts, setMenuProducts] = useState(ProductsData);

  const filter = (type) => {
    setMenuProducts(ProductsData.filter((product) => product.type === type));
  };

  return (
    <div className={css.container}>
      <img src={Plane} alt="" />
      <h1>Nuestros Productos</h1>
      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() => setMenuProducts(ProductsData)}>Todos</li>
          <li onClick={() => filter("Panadería")}>Panadería</li>
          <li onClick={() => filter("Dulce")}>Dulce</li>
          <li onClick={() => filter("Salado")}>Salado</li>
        </ul>
        <div className={css.list} ref={parent}>
          {MenuProducts.map((product, i) => (
            <div className={css.product}>
              <div className="left-s">
                <div className="name">
                  <span>{product.name}</span>
                  <br />
                  <span>{product.detail}</span>
                </div>
                <span>ARS${product.price}</span>
                <div>Comprar</div>
              </div>
              <img
                src={product.img}
                alt=""
                className="img-p"
                width="200px"
                height="170px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
