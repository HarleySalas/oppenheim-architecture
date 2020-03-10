import React, { useEffect } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import moment from "moment";
import "./news-post.scss";

import Layout from "../../components/Layout/Layout";
import ContactCTA from "../../components/ContactCTA/ContactCTA";
import ArrowLink from "../../components/ArrowLink/ArrowLink";

const BlogPost = ({ data }) => {
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <Layout>
      <header className="news-post__header">
        <Img
          fluid={data.current.frontmatter.thumbnail.childImageSharp.fluid}
          fadeIn={true}
          durationFadeIn={1000}
          draggable={false}
          alt={data.current.frontmatter.title}
          className="news-post__header__img-wrapper"
          imgStyle={{
            userSelect: "none",
            opacity: 1,
          }}
        />
        <div className="news-post__header__img-overlay"></div>
      </header>
      <div className="news-post__foreground">
        <div className="container news-post__content-container">
          <div className="news-post__info-wrapper">
            <span className="news-post__info">
              {data.current.frontmatter.category}
            </span>
            <span className="news-post__info">
              {moment(data.current.frontmatter.date).format("MMM Do, YYYY")}
            </span>
          </div>
          <h1 className="news-post__heading">
            {data.current.frontmatter.title}
          </h1>
          <div
            dangerouslySetInnerHTML={{
              __html: data.current.html,
            }}
          />
        </div>
      </div>
      <div className="container news-post__next-container">
        {data.next && (
          <div className="container news-post__next">
            <div className="news-post__next__content-wrapper news-post__next__content-wrapper--next">
              <span className="news-post__next__category">
                {data.next.frontmatter.category}
              </span>
              <h2 className="news-post__next__title">
                {data.next.frontmatter.title}
              </h2>
              <ArrowLink
                linkText="Next Post"
                linkTo={data.next.fields.slug}
                linkStyle="black"
              />
            </div>
            <Img
              fluid={data.next.frontmatter.thumbnail.childImageSharp.fluid}
              fadeIn={true}
              durationFadeIn={1000}
              draggable={false}
              alt={data.next.frontmatter.title}
              className="news-post__next__img-wrapper"
              imgStyle={{
                userSelect: "none",
                opacity: 1,
              }}
            />
          </div>
        )}
        {data.prev && (
          <div className="container news-post__next">
            <Img
              fluid={data.prev.frontmatter.thumbnail.childImageSharp.fluid}
              fadeIn={true}
              durationFadeIn={1000}
              draggable={false}
              alt={data.prev.frontmatter.title}
              className="news-post__next__img-wrapper"
              imgStyle={{
                userSelect: "none",
                opacity: 1,
              }}
            />
            <div className="news-post__next__content-wrapper news-post__next__content-wrapper--prev">
              <span className="news-post__next__category">
                {data.prev.frontmatter.category}
              </span>
              <h2 className="news-post__next__title">
                {data.prev.frontmatter.title}
              </h2>
              <ArrowLink
                linkText="Previous Post"
                linkTo={data.prev.fields.slug}
                linkStyle="black"
                backLink
              />
            </div>
          </div>
        )}
      </div>
      <ContactCTA />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!, $prev: String, $next: String) {
    current: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        category
        date
        thumbnail {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    prev: markdownRemark(fields: { slug: { eq: $prev } }) {
      fields {
        slug
      }
      frontmatter {
        title
        category
        date
        thumbnail {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      excerpt
    }
    next: markdownRemark(fields: { slug: { eq: $next } }) {
      fields {
        slug
      }
      frontmatter {
        title
        category
        date
        thumbnail {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      excerpt
    }
  }
`;

export default BlogPost;
