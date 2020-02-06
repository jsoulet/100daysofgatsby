const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    if (node.internal.type === 'Mdx') {
      const value = createFilePath({ node, getNode })
      createNodeField({
        // Individual MDX node
        node,
        // Name of the field you are adding
        name: 'slug',
        // Generated value based on filepath with "blog" prefix
        value: `/blog${value}`
      })
    }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    const result = await graphql(`
      query {
        allMdx(sort: {fields: frontmatter___date, order: ASC}) {
          edges {
            node {
              id
              fields {
                slug
              }
            }
            previous {
                frontmatter {
                    title
                }
                fields {
                    slug
                }
            }
            next {
                frontmatter {
                    title
                }
                fields {
                    slug
                }
            }
          }
        }
      }
    `)
    if (result.errors) {
      reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
    }
    // Create blog post pages.
    const posts = result.data.allMdx.edges
    // you'll call `createPage` for each result
    posts.forEach(({ node, previous, next }) => {
      createPage({
        // This is the slug you created before
        // (or `node.frontmatter.slug`)
        path: node.fields.slug,
        // This component will wrap our MDX content
        component: path.resolve(`./src/components/MDXPostLayout/component.tsx`),
        // You can use the values in this context in
        // our page layout component
        context: { id: node.id, previous, next },
      })
    })
  }