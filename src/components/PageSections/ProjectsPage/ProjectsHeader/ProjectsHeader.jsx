import React from "react";
import { Link } from "gatsby";
import "./projects-header.scss";

const ProjectsHeader = () => {
  return (
    <header className="projects-header">
      <div className="container projects-header__container">
        <h1 className="projects-header__title">Projects</h1>
        <nav className="projects-header__nav">
          <ul className="projects-header__nav__ul">
            <li className="projects-header__nav__li">
              <Link
                to="/projects"
                className="projects-header__nav__link"
                activeClassName="active"
              >
                Selected Work
              </Link>
            </li>
            <li className="projects-header__nav__li">
              <Link
                to="/projects/hospitality"
                className="projects-header__nav__link"
                activeClassName="active"
              >
                Hospitality
              </Link>
            </li>
            <li className="projects-header__nav__li">
              <Link
                to="/projects/mixed-use"
                className="projects-header__nav__link"
                activeClassName="active"
              >
                Mixed-use
              </Link>
            </li>
            <li className="projects-header__nav__li">
              <Link
                to="/projects/multi-family"
                className="projects-header__nav__link"
                activeClassName="active"
              >
                Multi-family
              </Link>
            </li>
            <li className="projects-header__nav__li">
              <Link
                to="/projects/private-home"
                className="projects-header__nav__link"
                activeClassName="active"
              >
                Private Home
              </Link>
            </li>
            <li className="projects-header__nav__li">
              <Link
                to="/projects/master-planning"
                className="projects-header__nav__link"
                activeClassName="active"
              >
                Master Planning
              </Link>
            </li>
            <li className="projects-header__nav__li">
              <Link
                to="/projects/commercial"
                className="projects-header__nav__link"
                activeClassName="active"
              >
                Commercial
              </Link>
            </li>
            <li className="projects-header__nav__li">
              <Link
                to="/projects/all"
                className="projects-header__nav__link"
                activeClassName="active"
              >
                All
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default ProjectsHeader;
