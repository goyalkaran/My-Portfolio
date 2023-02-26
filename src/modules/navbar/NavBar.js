import React, { useState, useEffect } from "react";
import "./style/NavBar.css";

const NavBar = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".nav__header");

    if (this.scrollY >= 80) {
      header.classList.add("scroll--header");
    } else {
      header.classList.remove("scroll--header");
    }
  });
  const [activeTab, setActiveTab] = useState("#home");
  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light-mode"
  );
  const toggleTheme = () => {
    if (theme === "light-mode") {
      setTheme("dark-mode");
      setDarkMode(true);
    } else {
      setTheme("light-mode");
      setDarkMode(false);
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);
  return (
    <header className="nav__header">
      <nav className="navbar__head container">
        <a href="#home" className="nav__logo">
          Karan Goyal
        </a>

        <div className={toggle ? "nav__menu display__menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => {
                  setActiveTab("#home");
                }}
                className={
                  activeTab === "#home" ? "nav__link active__link" : "nav__link"
                }
              >
                <i className="fa-solid fa-house nav__icon"></i>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => {
                  setActiveTab("#about");
                }}
                className={
                  activeTab === "#about"
                    ? "nav__link active__link"
                    : "nav__link"
                }
              >
                <i className="fa-solid fa-circle-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => {
                  setActiveTab("#skills");
                }}
                className={
                  activeTab === "#skills"
                    ? "nav__link active__link"
                    : "nav__link"
                }
              >
                <i className="fa-solid fa-brain nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => {
                  setActiveTab("#portfolio");
                }}
                className={
                  activeTab === "#portfolio"
                    ? "nav__link active__link"
                    : "nav__link"
                }
              >
                <i className="fa-solid fa-folder-closed nav__icon"></i> Projects
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => {
                  setActiveTab("#contact");
                }}
                className={
                  activeTab === "#contact"
                    ? "nav__link active__link"
                    : "nav__link"
                }
              >
                <i className="fa-solid fa-envelope nav__icon"></i> Contact
              </a>
            </li>
            <li className="nav__item ">
              <div
                onClick={() => {
                  toggleTheme();
                }}
                className="nav__link"
              >
                <i
                  className={
                    darkMode
                      ? "fa-regular fa-moon dark-mode-icon dark-mode"
                      : "fa-solid fa-moon dark-mode-icon light-mode"
                  }
                ></i>
                <span className="color-mode">Theme</span>
              </div>
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
  );
};

export default NavBar;
