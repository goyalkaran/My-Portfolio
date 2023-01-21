import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

// import hand from "../../assets/images/wave-hand.svg";

const BasicInfo = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [letterSpeed, setLetterSpeed] = useState(250 - Math.random * 100);
  const period = 500;
  const roles = [
    "Software Developer",
    "MERN Stack Developer",
    "Mobile App Developer",
  ];

  // useEffect(() => {
  //   const ticker = setInterval(() => {
  //     tick();
  //   }, letterSpeed);
  //   return () => {
  //     clearInterval(ticker);
  //   };
  // }, [text]);

  // const tick = () => {
  //   let i = loopNum % roles.length;
  //   let fullText = roles[i];
  //   let updatedText = isDeleting
  //     ? fullText.substring(0, text.length - 1)
  //     : fullText.substring(0, text.length + 1);
  //   setText(updatedText);
  //   if (isDeleting) {
  //     setIsDeleting((pervLetterSpeed) => pervLetterSpeed / 2);
  //   }
  //   if (!isDeleting && updatedText === fullText) {
  //     setIsDeleting(true);
  //     setLetterSpeed(period);
  //   } else if (isDeleting && updatedText === "") {
  //     setIsDeleting(false);
  //     setLoopNum(loopNum + 1);
  //     setLetterSpeed(500);
  //   }
  // };
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
            delay: 250,
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
      <p className="intro--description">
        A passionate coder, a very quick learner and a hardworking individual
        with an eagerness to learn new languages and technologies.
      </p>
      <a className="info-contact-button button button--flex" href="#contact">
        Say Hello
        <i className="fa-solid fa-paper-plane intro-contact-icon"></i>
      </a>
    </div>
  );
};

export default BasicInfo;
