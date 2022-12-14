import React, { useState } from "react";
import "./style/NavBar.css";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div>
      <header className="nav__header">
        <nav className="navbar__head container">
          <a href="#" className="nav__logo">
            Karan Goyal
          </a>

          <div className={toggle ? "nav__menu display__menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" className="nav__link active__link">
                  <i className="fa-solid fa-house nav__icon"></i>
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="fa-solid fa-circle-user nav__icon"></i> About
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="fa-solid fa-brain nav__icon"></i> Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#projects" className="nav__link">
                  <i className="fa-solid fa-folder-closed nav__icon"></i>{" "}
                  Projects
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="fa-solid fa-envelope nav__icon"></i> Contact
                </a>
              </li>
            </ul>

            <i
              onClick={() => {
                setToggle(false);
              }}
              className=" nav__close fa-solid fa-xmark"
            ></i>
          </div>
          <div
            onClick={() => {
              setToggle(true);
            }}
            className="nav__toggle"
          >
            <i className="fa-solid fa-bars-staggered "></i>
          </div>
        </nav>
      </header>
      <span className="dark-mode-icon">

      <i
        onClick={() => {
          setDarkMode(!darkMode);
        }}
        className={darkMode ? "fa-regular fa-moon dark-mode" : "fa-solid fa-moon light-mode"}
        ></i>
        </span>
    </div>
  );
};

export default NavBar;
