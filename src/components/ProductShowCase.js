import React, { useState, useEffect } from "react";
import db from "../firebase";
import { useParams } from "react-router-dom";
//importing css
import styles from "./ProductShowCase.module.css";
import ReactImageMagnify from "react-image-magnify";
import cx from "classnames";

const ProductShowCase = ({ productData }) => {
  const [activeImg, setActiveImg] = useState(null);

  return (
    <main>
      <div className={styles.main}>
        <section>
          <div className={styles.productPics}>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: activeImg ? activeImg : productData.img[0],
                },
                largeImage: {
                  src: activeImg ? activeImg : productData.img[0],
                  width: 1200,
                  height: 1800,
                },
                imageStyle: {
                  maxHeight: "80vh",
                  objectFit: "cover",
                  maxWidth: "39vw",
                  minWidth: "100%",
                  borderRadius: "8px",
                },
                style: {
                  borderRadius: "8px",
                  marginBottom: "10px",
                },
                fadeDurationInMs: 100,
                enlargedImagePosition: "over",
                hoverDelayInMs: 0,
                hoverOffDelayInMs: 0,
              }}
            />
            <div className={styles.otherImages}>
              {productData.img.map((image) => (
                <div
                  key={image}
                  onClick={() => {
                    setActiveImg(image);
                  }}
                  className={styles.indPic}
                  style={{
                    backgroundImage: `url(${image})`,
                    cursor: "pointer",
                  }}
                ></div>
              ))}
            </div>
          </div>

          <div className={styles.productDesc}>
            <h1>{productData?.name}</h1>
            <h3>${productData?.price}</h3>
            <p>{productData?.intro}</p>
            <input
              className={styles.incre}
              type="number"
              min="1"
              max="10"
              defaultValue="1"
            />
            <button>Add to cart</button>
            <h2>
              Categories:&nbsp;
              {productData.categories.map((category) => (
                <span key={category}>
                  <a href="#">{category}&nbsp;</a>
                </span>
              ))}
            </h2>
          </div>
        </section>
        <div className={styles.lowerSec}>
          <div className={styles.containerDesc}>
            <div>
              <h1 className={styles.desc}>Description</h1>
              <h1 className={styles.rev}>Reviews(0)</h1>
            </div>
            <p>{productData.description}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductShowCase;
