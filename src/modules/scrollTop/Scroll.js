import React from "react";
import "./style/scroll.css";

const Scroll = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scroll--up");

    if (this.scrollY >= 560) {
      scrollUp.classList.add("show-scroll");
    } else {
      scrollUp.classList.remove("show-scroll");
    }
  });
  return (
    <a href="#home" className="scroll--up">
      <i className="fa-solid fa-arrow-up scroll--up-icon"></i>
    </a>
  );
};

export default Scroll;
