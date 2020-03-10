import React, { useEffect } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import "./home-news.scss";

const HomeNews = () => {
  const data = useStaticQuery(graphql`
    query homeNews {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(news)/" } }
        sort: { order: DESC, fields: frontmatter___date }
        limit: 3
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              category
              title
              thumbnail {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const recentPostOne = data.allMarkdownRemark.edges[0].node;
  const recentPostTwo = data.allMarkdownRemark.edges[1].node;
  const recentPostThree = data.allMarkdownRemark.edges[2].node;

  return (
    <section className="home-news">
      <div className="container home-news__container">
        <div className="home-news__wrapper">
          <Link to={recentPostOne.fields.slug}>
            <Img
              fluid={recentPostOne.frontmatter.thumbnail.childImageSharp.fluid}
              fadeIn={true}
              durationFadeIn={1000}
              draggable={false}
              alt="Post Subject"
              className="home-news__img-wrapper"
              imgStyle={{
                userSelect: "none",
                opacity: 1,
              }}
              backgroundColor="#0e1113"
              placeholderClassName="home-news__img-placeholder"
            />
            <div className="home-news__img-overlay"></div>
            <div className="home-news__title-wrapper">
              <span className="home-news__category">
                {recentPostOne.frontmatter.category}
              </span>
              <span className="home-news__title">
                {recentPostOne.frontmatter.title}
              </span>
            </div>
          </Link>
        </div>
        <div className="home-news__wrapper">
          <Link to={recentPostTwo.fields.slug}>
            <Img
              fluid={recentPostTwo.frontmatter.thumbnail.childImageSharp.fluid}
              fadeIn={true}
              durationFadeIn={1000}
              draggable={false}
              alt="Post Subject"
              className="home-news__img-wrapper"
              imgStyle={{
                userSelect: "none",
                opacity: 1,
              }}
              backgroundColor="#0e1113"
              placeholderClassName="home-news__img-placeholder"
            />
            <div className="home-news__img-overlay"></div>
            <div className="home-news__title-wrapper">
              <span className="home-news__category">
                {recentPostTwo.frontmatter.category}
              </span>
              <span className="home-news__title home-news__title--sm">
                {recentPostTwo.frontmatter.title}
              </span>
            </div>
          </Link>
        </div>
        <div className="home-news__wrapper">
          <Link to={recentPostThree.fields.slug}>
            <Img
              fluid={
                recentPostThree.frontmatter.thumbnail.childImageSharp.fluid
              }
              fadeIn={true}
              durationFadeIn={1000}
              draggable={false}
              alt="Post Subject"
              className="home-news__img-wrapper"
              imgStyle={{
                userSelect: "none",
                opacity: 1,
              }}
              backgroundColor="#0e1113"
              placeholderClassName="home-news__img-placeholder"
            />
            <div className="home-news__img-overlay"></div>
            <div className="home-news__title-wrapper">
              <span className="home-news__category">
                {recentPostThree.frontmatter.category}
              </span>
              <span className="home-news__title home-news__title--sm">
                {recentPostThree.frontmatter.title}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeNews;
