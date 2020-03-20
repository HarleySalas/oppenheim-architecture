import React from "react";
import { Link } from "gatsby";
import "./underline-link.scss";

const UnderlineLink = props => {
  return (
    <Link
      to={props.linkTo}
      className={`underline-link ${props.addClass && props.addClass}`}
    >
      {props.children}
    </Link>
  );
};

export default UnderlineLink;
