const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    const result = await graphql(`
      query {
        allMdx(sort: {fields: frontmatter___date, order: ASC}) {
          edges {
            node {
              id
              frontmatter {
                  path
              }
            }
            previous {
                frontmatter {
                    title
                    path
                }
            }
            next {
                frontmatter {
                    title
                    path
                }
            }
          }
        }
      }
    `)
    if (result.errors) {
      reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
    }

    const posts = result.data.allMdx.edges
    posts.forEach(({ node, previous, next }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`./src/components/MDXPostLayout/component.tsx`),
        context: { id: node.id, previous, next },
      })
    })
  }