import React, { Fragment } from "react";
import "./onecategory.css";

function OneCategory({ image, title }) {
  return (
    <Fragment>
      <div className="one-category-container">
        <div className="one-category-image">{image}</div>
        <div className="one-category-title">{title}</div>
      </div>
    </Fragment>
  );
}

export default OneCategory;
