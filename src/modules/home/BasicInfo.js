import React from "react";
import hand from "../../assets/images/waving-hand-svgrepo-com.svg";

const BasicInfo = () => {
  return (
    <div className="intro--info">
      <span>Welcome to my portfolio</span>
      <h1 className="intro--title">
        Hi, I am Karan Goyal
        <img className="intro-title-icon" src={hand} alt="handWave" />
      </h1>
      <h3 className="intro--subtitle">Software Developer</h3>
      <p className="intro--description">
        Lorem Ipsum is simply dummy Lorem Ipsum has been the industry's standard
        dummy text ever unknown printer took a galley of type and scrambled it
        to make a type specimen book.
      </p>
      <a className="button button--flex" href="#contact">
        Say Hello
        <i className="fa-solid fa-paper-plane intro-contact-icon"></i>
      </a>
    </div>
  );
};

export default BasicInfo;
