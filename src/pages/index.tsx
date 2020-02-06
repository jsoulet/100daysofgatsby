import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import PostLink, { PostLinkProps } from '../components/PostListItem'
import Hero from '../components/Hero'

interface Props {
  data: {
    allMdx: {
      edges: [PostLinkProps]
    }
  }
}

const IndexPage = ({ data }: Props) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <div className="my-12">
        {data.allMdx.edges.map(post => (
          <PostLink
            post={post}
            key={post.node.id}
            excerpt={post.node.excerpt}
          />
        ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "Do MMMM YYYY")
            path
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 600, quality: 30) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
