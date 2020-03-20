import React from "react";
import { Link } from "gatsby";
import "./news-categories.scss";

import UnderlineLink from "../../../UnderlineLink/UnderlineLink";

const NewsCategories = () => {
  return (
    <div className="container news-categories">
      <span className="news-categories__title">Browse By Category :</span>
      <ul className="news-categories__ul">
        <li className="news-categories__li">
          <UnderlineLink linkTo="/news/news">News</UnderlineLink>
        </li>
        <li className="news-categories__li">
          <UnderlineLink linkTo="/news/press">Press</UnderlineLink>
        </li>
        <li className="news-categories__li">
          <UnderlineLink linkTo="/news/awards">Awards</UnderlineLink>
        </li>
        <li className="news-categories__li">
          <UnderlineLink linkTo="/news/event">Event</UnderlineLink>
        </li>
        <li className="news-categories__li">
          <UnderlineLink linkTo="/news/story">Story</UnderlineLink>
        </li>
      </ul>
    </div>
  );
};

export default NewsCategories;
