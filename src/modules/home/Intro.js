import React from "react";
import "./style/intro.css";
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

        <div className="intro--scroll">
          <a href="#about" className="intro-scroll-button button--flex">
            <span className="intro-scroll-name">Scroll Down</span>
            <i className="fa-sharp fa-solid fa-arrow-down intro-scroll-down-arrow"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
