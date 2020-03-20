import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../../components/Layout/Layout";
import ProjectsHeader from "../../components/PageSections/ProjectsPage/ProjectsHeader/ProjectsHeader";
import ProjectsList from "../../components/PageSections/ProjectsPage/ProjectsList/ProjectsList";
import ContactCTA from "../../components/ContactCTA/ContactCTA";

const Projects = () => {
  const data = useStaticQuery(graphql`
    query selectedProjects {
      allMarkdownRemark(
        filter: {
          fields: { slug: { regex: "/^/projects/" } }
          frontmatter: { selectedWork: { eq: true } }
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
                  fluid(quality: 100, maxWidth: 400) {
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

export default Projects;
