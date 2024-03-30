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
            <a href="#portfolio" className="footer--link">
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
            href="https://www.instagram.com/karangoyal047/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            className="footer--social-icon"
            href="https://www.linkedin.com/in/karan-goyal-971198179/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            className="footer--social-icon"
            href="https://discordapp.com/users/606895497491382274"
            target="_blank"
            rel="noreferrer"
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
