const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Articles {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug,
              lang
            }
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    actions.createPage({
      path: `/articles/${node.frontmatter.slug}`,
      component: path.resolve("./src/templates/article-details.tsx"),
      context: {
        slug: node.frontmatter.slug,
        lang: node.frontmatter.lang
      }
    });
  })
};