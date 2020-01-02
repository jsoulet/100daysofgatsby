const path = require('path')

exports.createPages = async ({actions, graphql, reporter}) => {
    const {createPage} = actions
    const blogPostTemplate = path.resolve(`${__dirname}/src/components/BlogPost/component.js`)
    const posts = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        id
                        frontmatter {
                            path
                        }
                    }
                }
            }
        }
    `)
    if (posts.errors) {
        reporter.panicOnBuild(`🚨 Error while running GraphQL query.`)
        return
    }

    posts.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: blogPostTemplate,
          context: {
              id: node.id
          },
        })
      })
}