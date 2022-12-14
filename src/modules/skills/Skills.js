import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../../assets/images/meter1.svg";
import meter2 from "../../assets/images/meter2.svg";
import meter3 from "../../assets/images/meter3.svg";

// "https://source.unsplash.com/random/?gradient/550x150"

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section id="skills" className="skill">
      <div className="container">
        {/* <img
          className="skill-bg-image"
          src="https://source.unsplash.com/random/?colors"
          alt="img"
        /> */}
        <div className="row">
          <div className="col">
            <h2>my skills</h2>
            <p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              <div>
                <img src={meter1} alt="image1" />
                <h5>web development</h5>
              </div>
              <div>
                <img src={meter2} alt="image2" />
                <h5>Flutter</h5>
              </div>
              <div>
                <img src={meter1} alt="image3" />
                <h5>Java</h5>
              </div>
              <div>
                <img src={meter3} alt="image4" />
                <h5>Python</h5>
              </div>
              <div>
                <img src={meter3} alt="image4" />
                <h5>JavaScript</h5>
              </div>
              <div>
                <img src={meter3} alt="image4" />
                <h5>HTML</h5>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
