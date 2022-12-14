import React from "react";
import "./style/intro.css";
import myImage from "../../assets/images/myImage.jpg";
import hand from "../../assets/images/waving-hand-svgrepo-com.svg";
const Intro = () => {
  return (
    <section id="home" className="intro section">
      <div className="intro-container container grid">
        {/* socials */}
        <div className="col-md-2">
          <div className="row">
            <div className="col">
              <a
                className="m-2"
                href={process.env.REACT_APP_INSTAGRAM_LINK}
                target="_blank"
              >
                <i className="fa-brands fa-instagram fa-xl"></i>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <a
                className="m-2"
                href={process.env.REACT_APP_LINKEDIN_LINK}
                target="_blank"
              >
                <i className="fa-brands fa-linkedin fa-xl"></i>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {" "}
              <a
                className="m-2"
                href={process.env.REACT_APP_GITHUB_LINK}
                target="_blank"
              >
                <i className="fa-brands fa-github fa-xl"></i>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <a
                className="m-2"
                href={process.env.REACT_APP_STACK_OVERFLOW_LINK}
                target="_blank"
              >
                <i className="fa-brands fa-stack-overflow fa-xl"></i>
              </a>
            </div>
          </div>
        </div>
        {/* basic intro */}
        <div className="col">
          <span>Welcome to my portfolio</span>
          <h1>
            {`Hi, I am Karan Goyal `}
            <img src={hand} alt="handWave" />
          </h1>
          <p>
            Lorem Ipsum is simply dummy Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesettinike Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => {
              console.log("pressed connect");
            }}
          >
            lets connect <i className="fa-solid fa-circle-arrow-right"></i>
          </button>
        </div>
        {/* my image */}
        <div className="col ">
          <img className="img-fluid " src={myImage} alt="hello"></img>
        </div>
      </div>
    </section>
  );
};

export default Intro;
