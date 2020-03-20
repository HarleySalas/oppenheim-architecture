import React from "react";
import "./projects-list.scss";

import ProjectsCard from "./ProjectsCard/ProjectsCard";

const ProjectsList = ({ data }) => {
  return (
    <section className="projects-list">
      <div className="container projects-list__container">
        {data ? (
          <div className="projects-list__grid">
            {data.allMarkdownRemark.edges.map((project, index) => (
              <ProjectsCard project={project} key={index} />
            ))}
          </div>
        ) : (
          <span className="projects-list__no-data">
            There are no projects matching this category...
          </span>
        )}
      </div>
    </section>
  );
};

export default ProjectsList;
