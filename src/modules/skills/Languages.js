import React from "react";

const Languages = () => {
  return (
    <div className="skills--content">
      <h3 className="skills--title">Languages</h3>
      <div className="skills--box">
        <div className="skills--group">
          <div className="skills--data">
            <i className="fa-brands fa-java"></i>
            <div>
              <h3 className="skills--name">Java</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>
          <div className="skills--data">
            <i className="fa-brands fa-python"></i>
            <div>
              <h3 className="skills--name">Python</h3>
              <span className="skills-level">Basic</span>
            </div>
          </div>
          <div className="skills--data">
            <i className="fa-brands fa-square-js"></i>
            <div>
              <h3 className="skills--name">JavaScript</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skills--group">
        <div className="skills--data">
            <i className="fa-brands fa-c"></i>
            <div>
              <h3 className="skills--name">C</h3>
              <span className="skills-level">Basic</span>
            </div>
          </div>
          <div className="skills--data">
            <i className="fa-brands fa-css3-alt"></i>
            <div>
              <h3 className="skills--name">CSS</h3>
              <span className="skills-level">Basic</span>
            </div>
          </div>
          <div className="skills--data">
            <i className="fa-brands fa-html5"></i>
            <div>
              <h3 className="skills--name">HTML</h3>
              <span className="skills-level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
