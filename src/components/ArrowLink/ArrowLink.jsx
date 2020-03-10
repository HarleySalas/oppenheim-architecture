import React from "react";
import { Link } from "gatsby";
import "./arrow-link.scss";

import Arrow from "../../shared/icons/arrow-stroke-01.svg";

const ArrowLink = props => {
  const linkStyle = `
    arrow-link
    ${props.linkStyle === "black" && "arrow-link--black"}
    ${props.linkStyle === "white" && "arrow-link--white"}
    ${props.addClass && props.addClass}
  `;

  const arrowStyle = `
    arrow-link__arrow
    ${props.linkStyle === "black" && "arrow-link__arrow--black"}
    ${props.linkStyle === "white" && "arrow-link__arrow--white"}
  `;
  if (props.backLink) {
    return (
      <Link to={props.linkTo} className={linkStyle}>
        <Arrow className={`${arrowStyle} back-link`} /> {props.linkText}
      </Link>
    );
  }
  return (
    <Link to={props.linkTo} className={linkStyle}>
      {props.linkText} <Arrow className={arrowStyle} />
    </Link>
  );
};

export default ArrowLink;
