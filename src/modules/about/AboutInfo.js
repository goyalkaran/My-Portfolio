import React from "react";


const AboutInfo = () => {

    const startDate = new Date('June 1, 2021');

// Current date
    const currentDate = new Date();

// Calculate the difference in milliseconds between the two dates
    const differenceMs = currentDate - startDate;

// Convert milliseconds to years
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; // accounting for leap years
    const yearsOfExperience = differenceMs / millisecondsInYear;

// Round to two decimal places
    const roundedYearsOfExperience = Math.round(yearsOfExperience * 100) / 100;

  return (
    <div className="about--data grid">
      <div className="about--box">
        <i className="fa-solid fa-briefcase about--icon"></i>
        <h3 className="about--title">Experience</h3>
        <span className="about--subtitle">{roundedYearsOfExperience} Years</span>
      </div>
      <div className="about--box">
        <i className="fa-solid fa-headset about--icon"></i>
        <h3 className="about--title">Contact</h3>
        <span className="about--subtitle">24x7</span>
      </div>
    </div>
  );
};

export default AboutInfo;
