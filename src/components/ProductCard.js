import React, { useState, useEffect, forwardRef } from "react";
import db from "../firebase";
import styles from "./ProductCard.module.css";
import { useHistory } from "react-router-dom";

const ProductCard = forwardRef(({ data }, ref) => {
  const history = useHistory();
  return (
    <div
      ref={ref}
      className={styles.productCard}
      style={{ cursor: "pointer" }}
      onClick={() => {
        history.push(`/products/${data.id}`);
        window.location.reload();
      }}
    >
      <div className={styles.cardImg}>
        <img src={data.img[0]} alt={data.name} />
        <div className={styles.addToCart}>Add To Cart</div>
      </div>
      <div className={styles.productDesc}>
        <h3>{data.name}</h3>
        <span>${data.price}</span>
      </div>
    </div>
  );
});

export default ProductCard;
