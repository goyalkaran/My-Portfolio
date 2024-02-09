import React from "react";

const MoreTools = () => {
    return (
        <div className="skills--content">
            <div className="skills--box">
                <div className="skills--group">
                    <div className="skills--data">
                        <i class="devicon-androidstudio-plain"></i>
                        <div>
                            <h3 className="skills--name">Android Studio</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills--data">
                        <i class="fa-brands fa-stack-overflow"></i>
                        <div>
                            <h3 className="skills--name">StackOverFlow</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills--data">
                        <i class="devicon-spring-plain"></i>
                        <div>
                            <h3 className="skills--name">Springboot</h3>
                            <span className="skills-level">Basic</span>
                        </div>
                    </div>
                </div>
                <div className="skills--group">
                    <div className="skills--data">
                        <i className="fa-solid fa-robot"></i>
                        <div>
                            <h3 className="skills--name">IOT</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills--data">
                        <i class="cib-postman"></i>
                        <div>
                            <h3 className="skills--name">Postman</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills--data">
                        <i class="cib-eclipseide"></i>
                        <div>
                            <h3 className="skills--name">Eclipseide</h3>
                            <span className="skills-level">Basic</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreTools;
