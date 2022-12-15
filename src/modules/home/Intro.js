import React from "react";
import "./style/intro.css";
import myImage from "../../assets/images/myImage.jpg";
import Social from "./Social";
import BasicInfo from "./BasicInfo";
import MyImage from "./MyImage";
const Intro = () => {
  return (
    <section id="home" className="intro section">
      <div className="intro--container container grid">
        <div className="intro--content grid">
          {/* socials */}
          <Social />
          {/* my image */}
          <MyImage />
          {/* basic intro */}
          <BasicInfo />
        </div>
      </div>
    </section>
  );
};

export default Intro;
