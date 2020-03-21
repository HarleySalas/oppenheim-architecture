import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import "./projects-card.scss";

import Pin from "../../../../../shared/icons/pin-basic-stroke-01.svg";
import CirclePath from "../../../../../shared/icons/circle-01.svg";
import Arrow from "../../../../../shared/icons/arrow-stroke-01.svg";

const ProjectsCard = ({ project }) => {
  //Try fixed Img instead of Fluid

  return (
    <Link to={project.node.fields.slug} className="projects-card__link">
      <div className="projects-card">
        <div className="projects-card__img-container">
          <Img
            fluid={project.node.frontmatter.thumbnail.childImageSharp.fluid}
            className="projects-card__img-wrapper"
          />
          <div className="projects-card__img-overlay">
            <button className="projects-card__btn">
              <CirclePath className="projects-card__btn__circle projects-card__btn__circle--bottom" />
              <CirclePath className="projects-card__btn__circle projects-card__btn__circle--top" />
              <Arrow className="projects-card__btn__arrow" />
            </button>
          </div>
        </div>
        <div className="projects-card__content-wrapper">
          <span className="projects-card__location">
            <Pin className="projects-card__pin" />
            {project.node.frontmatter.location}
          </span>
          <h2 className="projects-card__title">
            {project.node.frontmatter.title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default ProjectsCard;
