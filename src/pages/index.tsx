import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import PostLink, { PostLinkProps } from '../components/PostListItem'
import Hero from '../components/Hero'

interface Props {
  data: {
    allMarkdownRemark: {
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
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostLink post={node} key={node.id} excerpt={node.excerpt} />
        ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "Do MMMM YYYY")
            path
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 600) {
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
