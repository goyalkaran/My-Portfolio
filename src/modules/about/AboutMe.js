import React from "react";
import myImage2 from "../../assets/images/myImage2.jpg"
import resume from '../../assets/resume/Karan_Goyal_Resume_01-12-2022-17-30-30.pdf';
const AboutMe = () => {

  return (
    <div className="container" id="about">
      <div className="row">
        <div className="col">
          <img className="img-fluid" src={myImage2} alt="My Image"/>
        </div>
        <div className="col">
          <h2>About me</h2>

          <p>
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unch
          </p>
          <a download="" href={resume} className="btn btn-primary">Download Resume  <i class="fa-solid fa-file-arrow-down fa-xl"></i></a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
