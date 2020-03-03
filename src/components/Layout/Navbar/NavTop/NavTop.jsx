import React from "react";
import { Link } from "gatsby";
import "./NavTop.scss";

import Logo from "../../../../shared/oa-logo.svg";

const NavTop = () => {
  return (
    <div className="nav-top">
      <div className="container nav-top__container">
        <Link to="/" className="nav-top__logo-link">
          <Logo className="nav-top__logo" />
        </Link>
        <ul className="nav-top__ul">
          <li className="nav-top__li">
            <Link
              to="/projects"
              className="nav-top__link"
              activeClassName="active"
            >
              Projects
            </Link>
          </li>
          <li className="nav-top__li">
            <Link
              to="/company"
              className="nav-top__link"
              activeClassName="active"
            >
              Company
            </Link>
          </li>
          <li className="nav-top__li">
            <Link to="/news" className="nav-top__link" activeClassName="active">
              News
            </Link>
          </li>
          <li className="nav-top__li">
            <Link
              to="/contact"
              className="nav-top__link"
              activeClassName="active"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavTop;
