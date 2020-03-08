import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "./home-about.scss";

import ArrowLink from "../../../ArrowLink/ArrowLink";

const HomeAbout = () => {
  const data = useStaticQuery(graphql`
    query homeAboutImg {
      image: file(relativePath: { eq: "page-images/home-about.jpg" }) {
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
    <section className="home-about">
      <Img
        fluid={data.image.childImageSharp.fluid}
        fadeIn={true}
        durationFadeIn={1000}
        draggable={false}
        alt="Architecture Example"
        className="home-about__img-wrapper"
        imgStyle={{
          userSelect: "none",
          opacity: 1,
        }}
        backgroundColor="#0e1113"
        placeholderClassName="home-about__img-placeholder"
      />
      <div className="container home-about__container">
        <div className="home-about__content-wrapper">
          <p className="home-about__content">
            Oppenheim Architecture is an award winning architectual firm.
            Focusing on timeless design that is as beautiful as it is
            functional, our projects can be found in over 25 countries.
          </p>
          <ArrowLink
            linkText="More About Us"
            linkStyle="black"
            linkTo="/company/about"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;

/**
 * Oppenheim Architecture is an award winning architectual firm.
 * Focusing on timeless design that is as beautiful as it is functional, our projects
 * can be found in over 25 countries.
 */
