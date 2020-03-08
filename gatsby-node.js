const { createFilePath } = require(`gatsby-source-filesystem`);

//create slug node
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages ` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

//create blog pages
exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.fields.slug;

    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/NewsPost/NewsPost.jsx`),
      context: { slug: slug },
    });
  });
};
