import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import styles from "./store.module.css";
import db from "../firebase";
import FlipMove from "react-flip-move";
import BreadCrumb from '../components/BreadCrumb'
import Nav from "../components/Nav";

const Store = () => {
  const [products, setProducts] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  useEffect(() => {
    let unsubscribe = db.collection("products");
    if (!selectedCategory) {
      unsubscribe = unsubscribe.onSnapshot((snapshot) =>
        setProducts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        )
      );
    } else {
      unsubscribe = unsubscribe
        .where("categories", "array-contains", `${selectedCategory}`)
        .onSnapshot((snapshot) =>
          setProducts(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          )
        );
    }

    return () => {
      unsubscribe();
    };
  }, [selectedCategory, setProducts]);

  //   console.log(products);

  const sidebarOptions = [
    "Bags",
    "Boots",
    "Clothing",
    "Shoes",
    "Tops",
    "Trending",
    "Sandals",
  ];

  return (
    <>
    <Nav/>
    <BreadCrumb paths={['Home','Products']}/>
    <div className={styles.store}>
      {/* SIDEBAR */}
      <div className={styles.sidebar}>
        <h3>Categories</h3>
        <ul>
          <li onClick={() => setSelectedCategory(null)}>
            <span>All</span>
          </li>
          {sidebarOptions.map((option) => (
            <li key={option} onClick={() => setSelectedCategory(option)}>
              <span>{option}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* PRODUCTS */}
      <div className={styles.showcase}>
        <div className={styles.title}>
          <h3>Showing 1-9 of 9 results</h3>
        </div>

        <FlipMove className={styles.productsTable}>
          {products?.map((product) => (
            <ProductCard data={product} />
          ))}
        </FlipMove>
      </div>
    </div>
    </>
  );
};

export default Store;
