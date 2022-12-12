import React, { useEffect, useState } from "react";
import snapchat from "../../../assets/images/Snapchat-1090329637.jpg";
const Intro = () => {
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
    <section>
      <div className="row">
        <div className="col">
          <span>Welcome to my portfolio</span>
          <h1>
            {`Hi, I am a `}
            <span className="wrap">{text}</span>
          </h1>
          <p>
            Lorem Ipsum is simply dummy Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
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
        <div className="col md-6 xl-5 ">
          <img
          height="500px"

            src={snapchat}
            alt="hello"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default Intro;
