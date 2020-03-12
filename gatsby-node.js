const { createFilePath } = require(`gatsby-source-filesystem`);

//create slug node
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

//create pages
exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      newsData: allMarkdownRemark(
        filter: { fields: { slug: { regex: "/^/news/" } } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              layout
            }
          }
        }
      }
      projectsData: allMarkdownRemark(
        filter: { fields: { slug: { regex: "/^/projects/" } } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              layout
            }
          }
        }
      }
    }
  `);
  const news = data.newsData.edges;
  const projects = data.projectsData.edges;

  //Create News Pages
  news.forEach((edge, index) => {
    const slug = edge.node.fields.slug;

    actions.createPage({
      path: slug,
      component: require.resolve(
        `./src/templates/${news[index].node.frontmatter.layout}`
      ),
      context: {
        slug: slug,
        next: index === 0 ? null : news[index - 1].node.fields.slug,
        prev:
          index === news.length - 1 ? null : news[index + 1].node.fields.slug,
      },
    });
  });

  //Create Projects Pages
  projects.forEach((edge, index) => {
    const slug = edge.node.fields.slug;

    actions.createPage({
      path: slug,
      component: require.resolve(
        `./src/templates/${projects[index].node.frontmatter.layout}`
      ),
      context: {
        slug: slug,
        next: index === 0 ? null : projects[index - 1].node.fields.slug,
        prev:
          index === projects.length - 1
            ? null
            : projects[index + 1].node.fields.slug,
      },
    });
  });
};
