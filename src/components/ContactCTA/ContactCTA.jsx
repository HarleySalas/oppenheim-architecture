import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "./contact-cta.scss";

import Button from "../../components/Button/Button";

const ContactCTA = () => {
  const data = useStaticQuery(graphql`
    query contactCTA {
      image: file(relativePath: { eq: "cta-background.jpg" }) {
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
    <section className="contact-cta">
      <Img
        fluid={data.image.childImageSharp.fluid}
        fadeIn={true}
        durationFadeIn={1000}
        draggable={false}
        alt="Organic Roof Design"
        className="contact-cta__img-wrapper"
        imgStyle={{
          userSelect: "none",
          opacity: 1,
        }}
        backgroundColor="#0e1113"
        placeholderClassName="contact-cta__img-placeholder"
      />
      <div className="contact-cta__img-overlay">
        <div className="container contact-cta__container">
          <span className="contact-cta__span">Have a project in mind?</span>
          <Button
            btnText="Contact Us"
            btnStyle="white-outline"
            linkTo="/contact"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
