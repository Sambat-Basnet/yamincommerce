import React from "react";
const BreadCrumb = ({paths,header}) => {
  return (
    <div className="crumbArea">
      <div>
        <div className="title">
  <h2>{header ? header : paths[paths.length-1]}</h2>
        </div>
        <div className="location">
          <h3>
          {paths?.map(path=>{
            return(
              <>
            {path}<span>{' '}>{' '}</span>
            </>
          )})}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
