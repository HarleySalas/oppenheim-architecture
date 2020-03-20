import React from "react";
import "./not-found.scss";

import Button from "../../Button/Button";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container not-found__container">
        <h1 className="not-found__title">This page doesn't exist yet.</h1>
        <Button btnText="Back to Home" linkTo="/" btnStyle="black" />
      </div>
    </div>
  );
};

export default NotFound;
