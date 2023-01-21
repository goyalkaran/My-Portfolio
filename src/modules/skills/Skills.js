import React from "react";
import Frameworks from "./Frameworks";
import Languages from "./Languages";
import "./style/skills.css";
import Tools from "./Tools";

// "https://source.unsplash.com/random/?gradient/550x150"
const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <h2 className="section--title">Skills</h2>
      <div className="section--subtitle">My Technical Skills</div>
      <div className="skills--container container grid">
        <Languages />
        <Tools/>
        <Frameworks />
      </div>
    </section>
  );
};

export default Skills;
