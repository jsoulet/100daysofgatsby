import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostLink from "../components/PostLink"
import Hero from '../components/Hero'

const IndexPage = ({data}) => {

  return <Layout>
    <SEO title="Home" />
    <Hero/>
    <div>
      {data.allMarkdownRemark.edges.map(({node}) => <PostLink post={node} key={node.id} excerpt={node.excerpt}/>)}
    </div>
  </Layout>
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
          }
        }
      }
    }
  }
`

export default IndexPage
