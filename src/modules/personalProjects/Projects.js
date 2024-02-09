import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { projectData, projectNav } from "../../data/data";
import PersonalProjectItems from "./PersonalProjectItems";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectData);
    } else {
      const newProjects = projectData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };
  return (
    <div>
      <div className="project--filter">
        {projectNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={
                active === index
                  ? "active-project project--item"
                  : "project--item"
              }
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="project--container container grid">
        {projects.map((item) => {
          return <PersonalProjectItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
