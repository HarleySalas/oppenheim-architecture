import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "./home-hero.scss";

const HomeHero = () => {
  const data = useStaticQuery(graphql`
    query homeHeroImg {
      image: file(relativePath: { eq: "hero-images/ayla-golf-club-3.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <header className="home-hero">
      <Img
        fluid={data.image.childImageSharp.fluid}
        fadeIn={true}
        durationFadeIn={1000}
        draggable={false}
        alt="Architecture Example"
        className="home-hero__img-wrapper"
        imgStyle={{
          userSelect: "none",
          opacity: 1,
        }}
        backgroundColor="#0e1113"
        placeholderClassName="home-hero__img-placeholder"
      />
      <div className="home-hero__img-overlay">
        <div className="container home-hero__container">
          <h1 className="home-hero__heading">Gatsby Starter</h1>
          <span className="home-hero__sub-heading">
            This template is preconfigured with Netlify CMS,
            <br /> Redux and base sass styles.
          </span>
        </div>
      </div>
    </header>
  );
};

export default HomeHero;
