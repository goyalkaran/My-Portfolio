import React from "react";

const Tools = () => {
  return (
    <div className="skills--content">
      <h3 className="skills--title">Tools</h3>
      <div className="skills--box">
        <div className="skills--group">
          <div className="skills--data">
            <i className="fa-brands fa-git-alt"></i>
            <div>
              <h3 className="skills--name">Git</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>
          <div className="skills--data">
            <i className="fa-brands fa-github"></i>
            <div>
              <h3 className="skills--name">GitHub</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>
          <div className="skills--data">
            <i className="fa-solid fa-robot"></i>
            <div>
              <h3 className="skills--name">IOT</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skills--group">
          <div className="skills--data">
            <i className="fa-brands fa-linux"></i>
            <div>
              <h3 className="skills--name">Linux</h3>
              <span className="skills-level">Basic</span>
            </div>
          </div>
          <div className="skills--data">
            <i className="fa-brands fa-bootstrap"></i>
            <div>
              <h3 className="skills--name">Bootstrap</h3>
              <span className="skills-level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
