import React, { Fragment } from "react";
import "./hotcategories.css";
import { BsFire } from "react-icons/bs";
import { Link } from "react-router-dom";
import { OneCategory } from "../Index";
import { FaNetworkWired } from "react-icons/fa";

function HotCategories() {
  // const categories = [
  //     {
  //         image:
  //     }
  // ]
  return (
    <Fragment>
      <div className="hot-categories-title">
        <div className="hot-categories-title-leftside">
          Hot Categories <BsFire style={{ color: "orange" }} />
        </div>
        <div className="hot-categories-title-rightside">
          <Link>Show All</Link>
        </div>
      </div>
    </Fragment>
  );
}

export default HotCategories;
