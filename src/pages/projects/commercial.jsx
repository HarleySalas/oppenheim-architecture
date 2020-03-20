import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../../components/Layout/Layout";
import ProjectsHeader from "../../components/PageSections/ProjectsPage/ProjectsHeader/ProjectsHeader";
import ProjectsList from "../../components/PageSections/ProjectsPage/ProjectsList/ProjectsList";
import ContactCTA from "../../components/ContactCTA/ContactCTA";

const Commercial = () => {
  let data = useStaticQuery(graphql`
    query commercialProjects {
      allMarkdownRemark(
        filter: {
          fields: { slug: { regex: "/^/projects/" } }
          frontmatter: { categories: { in: "Commercial" } }
        }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              location
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

  return (
    <Layout>
      <ProjectsHeader />
      <ProjectsList data={data} />
      <ContactCTA />
    </Layout>
  );
};

export default Commercial;
