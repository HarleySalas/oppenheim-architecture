import React from "react";
import { Link } from "gatsby";
import "./button.scss";

const Button = props => {
  const btnStyle = `
    button
    ${props.btnStyle === "primary" && "button--primary"}
    ${props.btnStyle === "black" && "button--black"}
    ${props.btnStyle === "white-outline" && "button--white-outline"}
    ${!props.btnSize && "button--md"}
    ${props.addClass && props.addClass}
  `;

  const btnElement = (
    <button
      className={btnStyle}
      onClick={props.onClick}
      ref={props.btnRef}
      aria-label={props.btnText}
    >
      {props.btnText}
    </button>
  );

  if (props.linkTo) {
    return (
      <Link to={props.linkTo} aria-label={props.btnText}>
        {btnElement}
      </Link>
    );
  }

  return btnElement;
};

export default Button;
