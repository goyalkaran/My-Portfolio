import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            KARAN GOYAL
          </a>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                className="m-2"
                href={process.env.REACT_APP_INSTAGRAM_LINK}
                target="_blank"
              >
                <i className="fa-brands fa-instagram fa-xl"></i>
              </a>
              <a
                className="m-2"
                href={process.env.REACT_APP_LINKEDIN_LINK}
                target="_blank"
              >
                <i className="fa-brands fa-linkedin fa-xl"></i>
              </a>
              <a
                className="m-2"
                href={process.env.REACT_APP_GITHUB_LINK}
                target="_blank"
              >
                <i className="fa-brands fa-github fa-xl"></i>
              </a>
              <a
                className="m-2"
                href={process.env.REACT_APP_STACK_OVERFLOW_LINK}
                target="_blank"
              >
                <i className="fa-brands fa-stack-overflow fa-xl"></i>
              </a>
            </div>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
