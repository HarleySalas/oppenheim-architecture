import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import "./news-card.scss";

const NewsCard = ({ data }) => {
  console.log(data);
  return (
    <Link to={data.fields.slug}>
      <div className="news-card">
        <Img
          fluid={data.frontmatter.thumbnail.childImageSharp.fluid}
          fadeIn={true}
          durationFadeIn={1000}
          draggable={false}
          alt="Architecture Example"
          className="news-card__img-wrapper"
          imgStyle={{
            userSelect: "none",
            opacity: 1,
          }}
          backgroundColor="#0e1113"
          placeholderClassName="news-card__img-placeholder"
        />
        <div className="news-card__content-wrapper">
          <span className="news-card__category">
            {data.frontmatter.category}
          </span>
          <h2 className="news-card__title">{data.frontmatter.title}</h2>
          <div className="news-card__fade"></div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
