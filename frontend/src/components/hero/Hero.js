import React, { Fragment } from "react";
import heroPhoto from "./heroseciotn.JPG";
import "./hero.css";
import { Button } from "../Index";

function Hero() {
  return (
    <Fragment>
      <div className="hero-container">
        <div className="hero-leftside">
          <div className="hero-content-h">
            Online store with products from all brands
          </div>
          <div className="hero-content-s">Search for your needed products</div>
          <Button placeholder="View Products" />
        </div>
        <div className="hero-rightside">
          <img src={heroPhoto} alt="hero" />
        </div>
      </div>
    </Fragment>
  );
}

export default Hero;
