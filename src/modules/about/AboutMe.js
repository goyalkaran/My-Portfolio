import React from "react";
import "./style/AboutMe.css";
import myImage2 from "../../assets/images/myImage2.jpg";
import resume from "../../assets/resume/Karan_Goyal_Resume_01-12-2022-17-30-30.pdf";
import AboutInfo from "./AboutInfo";
const AboutMe = () => {
  return (
    <section className="section about" id="about">
      <h2 className="section--title">About Me</h2>
      <div className="section--subtitle">My Introduction</div>
      <div className="about--container container grid">
        <div className="about--image"></div>
        <div className="about--info">
          <AboutInfo />
          <p className="about--description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            praesentium magni tempora repellendus, iure tempore a ex accusamus
            libero perspiciatis nulla aliquam dolor ullam temporibus.
          </p>
          <a href={resume} download="" className="button button--flex">
            Download Resume
            <i className="fa-solid fa-file about-resume-icon"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
