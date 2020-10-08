import React from "react";
import BreadCrumbData from "../constants/BreadCrumbData.json";
const BreadCrumb = () => {
  return (
    <div className="crumbArea">
      <div>
        <div className="title">
          <h2>Products</h2>
        </div>
        <div className="location">
          <h3>
            {BreadCrumbData.brand} > {BreadCrumbData.category} >{" "}
            {BreadCrumbData.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
