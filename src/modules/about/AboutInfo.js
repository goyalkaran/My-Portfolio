import React from "react";

const AboutInfo = () => {
  return (
    <div className="about--data grid">
      <div className="about--box">
        <i className="fa-solid fa-briefcase about--icon"></i>
        <h3 className="about--title">Experience</h3>
        <span className="about--subtitle">Fresher</span>
      </div>
      <div className="about--box">
        <i className="fa-solid fa-headset about--icon"></i>
        <h3 className="about--title">Contact</h3>
        <span className="about--subtitle">24x7</span>
      </div>
    </div>
  );
};

export default AboutInfo;
