import React, { useEffect } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import marked from "marked";
import "./project.scss";

import Layout from "../../components/Layout/Layout";
import Carousel from "../../components/Carousel/Carousel";
import ContactCTA from "../../components/ContactCTA/ContactCTA";
import Pin from "../../shared/icons/pin-basic-stroke-01.svg";

const Project = ({ data }) => {
  const imgArr = data.markdownRemark.frontmatter.images;
  const project = data.markdownRemark;

  return (
    <Layout title={project.frontmatter.title}>
      <header className="project__carousel">
        <Carousel arrows>
          {imgArr.map((img, index) => (
            <Img
              key={index}
              fluid={img.childImageSharp.fluid}
              fadeIn={true}
              durationFadeIn={1000}
              draggable={false}
              alt="Architecture Example"
              className="project__carousel__img-wrapper"
              imgStyle={{
                userSelect: "none",
                opacity: 1,
              }}
              backgroundColor="#0e1113"
              placeholderClassName="project__carousel__img-placeholder"
            />
          ))}
        </Carousel>
        <div className="project__carousel__overlay">
          <div className="container project__carousel__overlay__container">
            <span className="project__carousel__location">
              <Pin className="project__carousel__pin" />{" "}
              {project.frontmatter.location}
            </span>
            <h1 className="project__carousel__title">
              {project.frontmatter.title}
            </h1>
          </div>
        </div>
      </header>
      <div className="project__foreground">
        <div className="container project__container">
          <div className="project__info">
            <div className="project__info__half">
              <span className="project__info__title">Project Type</span>
              <span className="project__info__detail">
                {project.frontmatter.projectType}
              </span>
            </div>
            <div className="project__info__half">
              <span className="project__info__title">Scope</span>
              <span className="project__info__detail">
                {project.frontmatter.scope}
              </span>
            </div>
          </div>
          <div
            className="project__content"
            dangerouslySetInnerHTML={{ __html: project.html }}
          />
          <div className="project__info">
            <div className="project__info__half">
              <span className="project__info__title">Credits</span>
              <div
                className="project__info__detail"
                dangerouslySetInnerHTML={{
                  __html: marked(project.frontmatter.credits),
                }}
              ></div>
            </div>
            <div className="project__info__half">
              <span className="project__info__title">Image Credits</span>
              <span className="project__info__detail">
                {project.frontmatter.imageCredits}
              </span>
            </div>
          </div>
        </div>
      </div>
      <ContactCTA />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        projectType
        scope
        location
        categories
        images {
          childImageSharp {
            fluid(quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        credits
        imageCredits
      }
    }
  }
`;

export default Project;
