import React, { useEffect } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import "./news-post.scss";

import Layout from "../../components/Layout/Layout";
import ContactCTA from "../../components/ContactCTA/ContactCTA";

const BlogPost = ({ data }) => {
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <Layout>
      <header className="container news-post__header">
        <Img
          fluid={
            data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid
          }
          fadeIn={true}
          durationFadeIn={1000}
          draggable={false}
          alt={data.markdownRemark.frontmatter.title}
          className="news-post__header__img-wrapper"
          imgStyle={{
            userSelect: "none",
            opacity: 1,
          }}
        />
        <div className="news-post__header__img-overlay">
          <h1 className="news-post__heading">
            {data.markdownRemark.frontmatter.title}
          </h1>
        </div>
      </header>
      <div className="container news-post__content-container">
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
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
`;

export default BlogPost;
