import React from "react";
import Contact from "../modules/contact/Contact.js"
import Intro from "../modules/home/Intro.js";
import NavBar from "../modules/navbar/NavBar.js";
import AboutMe from '../modules/about/AboutMe.js';
import Projects from "../modules/projects/Projects.js";
import Skills from "../modules/skills/Skills.js";

export const Home = () => {
  return (
    <div id="home">
      <NavBar />
      <Intro />
      <AboutMe/>
      <Skills />
      {/* <Projects /> */}
      {/* <Contact /> */}
    </div>
  );
};