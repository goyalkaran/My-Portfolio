import React from "react";
import Projects from "./Projects";
import "./style/project.css";
const PersonalProjects = () => {
  return (
    <section className="section projects" id="projects">
      <h2 className="section--title">Personal Projects</h2>
      {/* <div className="section--subtitle">Most Resent Personal Projects</div> */}
      <Projects />
    </section>
  );
};

export default PersonalProjects;
