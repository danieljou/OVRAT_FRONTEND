import React from "react";
import "./style.scss";
import heroImg from "../../assets/heroimg.jpg";

const HeroSection = ({ small, large, title, dept, sem }) => {
  return (
    <div className={"heroSection " + (large ? "large" : "small")}>
      <div className="heroSection-content">
        <div className="left">
          {large && <img src={heroImg} alt="heroimage" />}
        </div>

        <div className="right">
          <h3>{small ? (dept + " " + sem + " sem") : "Developer Daniel"} </h3>
          <h1>{title}</h1>
          {large && (
            <p>
              All your mecical and humain anatomy learning by Virtual Reality and Augmented Reality

            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;