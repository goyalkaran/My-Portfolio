import React from "react";
import Projects from "./Projects";
import "./style/project.css";
const Portfolio = () => {
  return (
    <section className="section portfolio" id="portfolio">
      <h2 className="section--title">Work</h2>
      <div className="section--subtitle">Most Resent Works</div>
      <Projects />
    </section>
  );
};

export default Portfolio;
