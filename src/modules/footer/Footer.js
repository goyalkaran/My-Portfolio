import React from "react";
import "./style/footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer--container container">
        <h1 className="footer--title">Karan</h1>

        <ul className="footer--list">
          <li>
            <a href="#about" className="footer--link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="footer--link">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="footer--link">
              Technical Skills
            </a>
          </li>
        </ul>

        <div className="footer--social">
          <a
            className="footer--social-icon"
            href={process.env.REACT_APP_INSTAGRAM_LINK}
            target="_blank"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            className="footer--social-icon"
            href={process.env.REACT_APP_LINKEDIN_LINK}
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            className="footer--social-icon"
            href={process.env.REACT_APP_DISCORD}
            target="_blank"
          >
            <i className="fa-brands fa-discord"></i>
          </a>
        </div>
        <span className="footer--copyright">
          &#169; KaranGoyal. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
