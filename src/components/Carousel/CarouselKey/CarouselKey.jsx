import React from "react";
import "./carousel-key.scss";

const CarouselKey = ({ selected, onClick }) => (
  <button
    className={`carousel-key ${selected ? "is-selected" : ""}`}
    onClick={onClick}
  ></button>
);

export default CarouselKey;
