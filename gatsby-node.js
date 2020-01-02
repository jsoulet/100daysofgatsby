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
                    next {
                        frontmatter {
                            path
                            title
                        }
                    }
                    previous {
                        frontmatter {
                            path
                            title
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

    posts.data.allMarkdownRemark.edges.forEach(({ node, next, previous }) => {
        createPage({
          path: node.frontmatter.path,
          component: blogPostTemplate,
          context: {
              id: node.id,
              next,
              previous,
          },
        })
      })
}