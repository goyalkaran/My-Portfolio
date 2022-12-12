import React from "react";
import Contact from "../components/sections/Contact";
import Intro from "../components/sections/Intro";
import NavBar from "../components/sections/NavBar";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";

export const Home = () => {
  return (
    <div id="home">
      <NavBar />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};