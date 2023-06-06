import React from "react";
import Typewriter from "typewriter-effect";

const BasicInfo = () => {
  const period = 50;
  const roles = [
    {
      title: 'Software Developer',
      icon: <i class="fa-solid fa-laptop-code"></i>,
    },
    {
      title: 'Flutter Developer',
      icon:
        <i class="devicon-flutter-plain colored"></i>
      ,
    },
    {
      title: 'MERN Stack Developer',
      icon:
        <i class="devicon-react-original colored"></i>
      ,
    },
    {
      title: 'React Developer',
      icon: <i class="devicon-react-original colored"></i>,
    },

    {
      title: 'Java Developer',
      icon:
        <i class="devicon-java-plain colored"></i>
      ,
    },
  ];

  return (
    <div className="intro--info">
      <h1 className="intro--title">
        Karan Goyal
        <span class="wave"><i class="fa-solid fa-hand intro-title-hand fa-2xl"></i></span>
      </h1>
      <h3 className="intro--subtitle">
        <Typewriter
          options={{
            strings: roles.map((role) => role.title),
            delay: 50,
            cursor: "|",
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
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
