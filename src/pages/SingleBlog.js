import React, { useEffect, useState } from "react";
import image from "../assets/art.jpg";
import db from "../firebase";
// importing components

import { useParams } from "react-router-dom";

const SingleBlog = () => {
  //for specific id, returns the particular id
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  useEffect(() => {
    // CREATE
    // db.collection("blogs").add({
    //   blog:'eoudhfdsf',
    //   img:"dhgfdf"
    // })
    // REMOVE
    // db.collection('blogs).doc(id).remove()
    // Update
    // db.collection('blogs).doc(id).update({
    //   blog:"khbfkhfs",
    // })
    db.collection("blogs")
      .doc(id)
      .get()
      .then((snapshot) =>
        setBlogData({
          id: snapshot.id,
          ...snapshot.data(),
        })
      )
      .catch((error) => console.warn(error.message));
  }, [id]);
  return (
    <div className="primeBlog">
      {!blogData ? (
        <div
          style={{
            height: "100%",
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
      ) : (
        <div className="mainBlog">
          <div className="image">
            <img className="art" src={blogData?.img} alt="art" />
          </div>
          <div className="blogContent">
            <div>
              <p className="blogDate">
                {/* question chei function chalako lai matra */}
                {new Date(blogData?.date?.toDate())
                  .toUTCString()
                  .slice(4, 16)}{" "}
                -{" "}
                <a className="category" href="#">
                  {blogData?.category}
                </a>
              </p>
              <h1 className="blogTitle">{blogData?.title}</h1>
              <p className="blogPrime">{blogData?.blog}</p>
              <p className="blogQuote">
                <span>"{blogData?.quote}</span>
              </p>
              <p className="blogPrime">{blogData?.blog}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleBlog;
