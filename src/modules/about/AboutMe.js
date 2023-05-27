import React from "react";
import "./style/AboutMe.css";
import AboutInfo from "./AboutInfo";
import { useLottie } from "lottie-react";
import { AssetPath } from "../../shared/components/AssetPath";


const AboutMe = () => {
  const options = {
    animationData: AssetPath.Lottie.workingPerson,
    loop: true
  };

  const { View } = useLottie(options);
  return (
    <section className="section about" id="about">
      <h2 className="section--title">About Me</h2>
      <div className="section--subtitle">My Introduction</div>
      <div className="about--container container grid">
        <span class="about--image">{View}</span>
        <div className="about--info">
          <AboutInfo />
          <p className="about--description">
            I am a skilled Full Stack web developer and Flutter App developer with a strong passion for coding and a quick
            learning ability. I am always eager to learn new
            languages and technologies in order to improve my skills
            and stay up-to-date with the latest industry trends.
            I strongly believe in the importance of teamwork and the
            growth that can be achieved through collaboration. With
            my dedication and expertise, I am confident that I can
            contribute to the success of any project or team.
          </p>
          <a href={AssetPath.Documents.myResume} download="" className="button button--flex">
            Download Resume
            <i className="fa-solid fa-file about-resume-icon"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
