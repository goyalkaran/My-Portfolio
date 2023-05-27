import React from "react";
import Typewriter from "typewriter-effect";

const BasicInfo = () => {
  const period = 200;
  const roles = [
    "Software Developer",
    "MERN Stack Developer",
    "Mobile App Developer",
  ];

  return (
    <div className="intro--info">
      <h1 className="intro--title">
        Karan Goyal
        {/* <i class="fa-regular fa-face-smile intro-title-icon"></i> */}
        {/* <img className="intro-title-hand" src={hand} alt="handWave" /> */}
      </h1>
      <h3 className="intro--subtitle">
        <Typewriter
          options={{
            strings: roles,
            delay: 100,
            cursor: "|",
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              // .typeString(roles[loopNum % roles.length])
              .pauseFor(period)
              .deleteAll()
              .start();
          }}
        />
      </h3>
      {/* <p className="intro--description">
        A passionate coder, a very quick learner and a hardworking individual
        with an eagerness to learn new languages and technologies.
      </p> */}
      <a className="info-contact-button button button--flex" href="#contact">
        Say Hello
        <i className="fa-solid fa-paper-plane intro-contact-icon"></i>
      </a>
    </div>
  );
};

export default BasicInfo;
