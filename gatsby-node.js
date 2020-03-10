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
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
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
  const posts = data.allMarkdownRemark.edges;
  posts.forEach((edge, index) => {
    const slug = edge.node.fields.slug;

    actions.createPage({
      path: slug,
      component: require.resolve(
        `./src/templates/${posts[index].node.frontmatter.layout}`
      ),
      context: {
        slug: slug,
        next: index === 0 ? null : posts[index - 1].node.fields.slug,
        prev:
          index === posts.length - 1 ? null : posts[index + 1].node.fields.slug,
      },
    });
  });
};
