import React from "react";

const Frameworks = () => {
  return (
    <div className="skills--content">
      <h3 className="skills--title">Frameworks</h3>
      <div className="skills--box">
        <div className="skills--group">
          <div className="skills--data">
            <i className="fa-brands fa-react"></i>
            <div>
              <h3 className="skills--name">React</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>
          <div className="skills--data">
          <i className="fa-brands fa-bootstrap"></i>
            <div>
              <h3 className="skills--name">Flutter</h3>
              <span className="skills-level">Basic</span>
            </div>
          </div>
          {/* <div className="skills--data">
            <i className="fa-brands fa-square-js"></i>
            <div>
              <h3 className="skills--name">JavaScript</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div> */}
        </div>
        <div className="skills--group">
          <div className="skills--data">
            <i className="fa-brands fa-bootstrap"></i>
            <div>
              <h3 className="skills--name">Bootstrap</h3>
              <span className="skills-level">Basic</span>
            </div>
          </div>
          {/* <div className="skills--data">
            <i className="fa-brands fa-html5"></i>
            <div>
              <h3 className="skills--name">HTML</h3>
              <span className="skills-level">Bais</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Frameworks;
