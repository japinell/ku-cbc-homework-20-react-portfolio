//
import React from "react";
//
//  Render the hero component
//
function Hero() {
  return (
    <div className="container-fluid hero" id="splash">
      <div className="container">
        <h1>Chocoyo Portfolio</h1>
        <span className="lead">Jose A. Pinell</span>
        <span className="arrow">
          <a href="#about">
            <i className="fa fa-angle-down"></i>
          </a>
        </span>
      </div>
    </div>
  );
}

export default Hero;
