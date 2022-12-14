import React, { useEffect, useState } from "react";
import myImage2 from "../../assets/images/myImage2.jpg"
import resume from '../../assets/resume/Karan_Goyal_Resume_01-12-2022-17-30-30.pdf';
const AboutMe = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [letterSpeed, setLetterSpeed] = useState(300 - Math.random * 100);
  const period = 500;
  const roles = [
    "Web Developer",
    "Full Stack MERN Developer",
    "Mobile Developer",
  ];

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, letterSpeed);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % roles.length;
    let fullText = roles[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setIsDeleting((pervLetterSpeed) => pervLetterSpeed / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setLetterSpeed(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setLetterSpeed(200);
    }
  };
  return (
    <div className="container" id="about">
      <div className="row">
        <div className="col">
          <img className="img-fluid" src={myImage2} alt="My Image"/>
        </div>
        <div className="col">
          <h2>About me</h2>
          <h1>
            {`I am a `}
            <span className="wrap">{text}</span>
          </h1>
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
