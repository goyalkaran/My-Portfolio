import React from "react";

const Social = () => {
  return (
    <div className="intro--social">
      <a
        className="intro-social-icon"
        href={process.env.REACT_APP_INSTAGRAM_LINK}
        target="_blank"
      >
        <i className="fa-brands fa-instagram fa-xl"></i>
      </a>
      <a
        className="intro-social-icon"
        href={process.env.REACT_APP_LINKEDIN_LINK}
        target="_blank"
      >
        <i className="fa-brands fa-linkedin fa-xl"></i>
      </a>
      <a
        className="intro-social-icon"
        href={process.env.REACT_APP_GITHUB_LINK}
        target="_blank"
      >
        <i className="fa-brands fa-github fa-xl"></i>
      </a>
      {/* <a
        className="intro-social-icon"
        href={process.env.REACT_APP_STACK_OVERFLOW_LINK}
        target="_blank"
      >
        <i className="fa-brands fa-stack-overflow fa-xl"></i>
      </a> */}
    </div>
  );
};

export default Social;
