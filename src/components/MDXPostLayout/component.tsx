import React, { FunctionComponent } from 'react'
import { graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import Helmet from 'react-helmet'

import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../Layout'
import PostLinks, { PostLinkInterface } from './PostLinks'
import SEO from '../seo'

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allMdx(filter: { id: { eq: $id } }) {
      edges {
        node {
          body
          excerpt(pruneLength: 160)
          frontmatter {
            title
            date(formatString: "Do MMMM YYYY")
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 680, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            seoCard: featuredImage {
              childImageSharp {
                fixed(width: 1200, height: 600) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`

interface BlogPostProps {
  data: {
    site: {
      siteMetadata: { siteUrl: string }
    }
    allMdx: {
      edges: [
        {
          node: {
            body: any
            excerpt: string
            frontmatter: {
              title: string
              date: string
              featuredImage: any
              seoCard: any
            }
          }
        }
      ]
    }
  }
  pageContext: {
    previous: PostLinkInterface
    next: PostLinkInterface
  }
}

const BlogPost: FunctionComponent<BlogPostProps> = ({ data, pageContext }) => {
  const { node } = data.allMdx.edges[0]
  const { body, frontmatter } = node
  const { next, previous } = pageContext

  return (
    <Layout>
      <SEO title={frontmatter.title} description={node.excerpt} />
      <Helmet
        meta={[
          {
            name: `twitter:card`,
            content: `summary_large_image`,
          },
          {
            property: `og:image`,
            content: `${data.site.siteMetadata.siteUrl}${frontmatter.seoCard.childImageSharp.fixed.src}`,
          },
          {
            name: `twitter:image`,
            content: `${data.site.siteMetadata.siteUrl}${frontmatter.seoCard.childImageSharp.fixed.src}`,
          },
        ]}
      ></Helmet>
      <div
        className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
        style={{ fontFamily: 'Georgia,serif' }}
      >
        <div className="font-sans">
          <span className="text-base md:text-sm text-teal-500 font-bold">
            &lt;{' '}
          </span>
          <Link
            to="/"
            className="text-base md:text-sm text-teal-500 font-bold no-underline hover:underline"
          >
            HOME
          </Link>
          <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
            {frontmatter.title}
          </h1>
          <div className="flex items-center justify-between">
            <p className="text-sm md:text-base font-normal text-gray-600">
              {frontmatter.date}
            </p>
          </div>
          <Image
            fluid={frontmatter.featuredImage.childImageSharp.fluid}
          ></Image>
        </div>
        <section className="py-6 leading-normal markdown">
          <MDXRenderer>{body}</MDXRenderer>
        </section>
        <hr className="border-b-2 border-gray-400 mb-8" />
        <PostLinks {...{ next, previous }} />
      </div>
    </Layout>
  )
}

// const BlogPostForm = {
//   fields: [
//     {
//       label: 'Title',
//       name: 'frontmatter.title',
//       component: 'text',
//     },
//     {
//       label: 'Path',
//       name: 'frontmatter.path',
//       description: 'Enter the post URL',
//       component: 'text',
//       defaultValue: '/blog/',
//     },
//     {
//       label: 'Date',
//       name: 'frontmatter.date',
//       component: 'date',
//       dateFormat: 'Do MMMM YYYY',
//       timeFormat: false,
//       defaultValue: new Date(),
//     },
//   ],
// }

export default BlogPost
// export default liveRemarkForm(BlogPost, BlogPostForm)
