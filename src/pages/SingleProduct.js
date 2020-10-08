import React, { useState, useEffect } from "react";

// importing components
import ProductShowCase from "../components/ProductShowCase";
import { useParams } from "react-router-dom";
import db from "../firebase";
import ProductCard from "../components/ProductCard";

const SingleProduct = () => {
  const [productData, setProductData] = useState(null);
  const [documents, setDocuments] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    db.collection("products")
      .doc(id)
      .get()
      .then((snapshot) => {
        setProductData({
          id: snapshot.id,
          ...snapshot.data(),
        });
      })
      .catch((error) => console.warn(error.message));
  }, [id]);

  useEffect(() => {
    const unsubscribe = db.collection("products").onSnapshot((snapshot) =>
      setDocuments(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      )
    );
    return () => {
      unsubscribe();
    };
  }, []);

  if (!productData) {
    return (
      <div
        style={{
          height: "80vw",
          width: "100%",
          display: "grid",
          placeContent: "center",
        }}
      >
        <img
          src="https://flevix.com/wp-content/uploads/2019/07/Curve-Loading.gif"
          alt="loading-gif"
        />
      </div>
    );
  }

  return (
    <>
      <ProductShowCase productData={productData} />
      <h1
        style={{
          width: "79vw",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "2rem",
          fontSize: "24px",
          fontWeight: "600",
          color: "#1e205a",
        }}
      >
        Related Products
      </h1>
      <div
        className="grid-test"
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "82vw",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "50px",
        }}
      >
        <ProductCard data={documents[2]} key={documents[2]?.id} />
        <ProductCard data={documents[4]} key={documents[4]?.id} />
        <ProductCard data={documents[5]} key={documents[5]?.id} />
        <ProductCard data={documents[8]} key={documents[8]?.id} />
      </div>
    </>
  );
};
export default SingleProduct;
