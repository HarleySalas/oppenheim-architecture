import React from "react";
import { Link } from "gatsby";
import "./circle-button.scss";

import CirclePath from "../../shared/icons/circle-01.svg";
import ArrowPath from "../../shared/icons/arrow-stroke-01.svg";

const CircleButton = props => {
  return (
    <Link
      to={props.linkTo}
      className={`circle-button ${props.addClass && props.addClass}`}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <button className="circle-button__btn">
        <div className="circle-button__circle-wrapper">
          <CirclePath className="circle-button__circle circle-button__circle--bottom" />
          <CirclePath className="circle-button__circle circle-button__circle--top" />
          <ArrowPath className="circle-button__arrow" />
        </div>
        {props.btnText && (
          <span className="circle-button__text">{props.btnText}</span>
        )}
      </button>
    </Link>
  );
};

export default CircleButton;
