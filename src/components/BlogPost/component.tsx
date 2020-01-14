import React from 'react'
import { graphql, Link } from 'gatsby'
import { liveRemarkForm } from 'gatsby-tinacms-remark'
import { Wysiwyg } from '@tinacms/fields'
import { TinaField } from 'tinacms'
import { Button as TinaButton } from '@tinacms/styles'

import Layout from '../Layout'
import PostLinks, { PostLinkProps } from './PostLinks'
import SEO from '../seo'

interface Props {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        date: string
      }
      html: string
      excerpt: string
    }
  }
  pageContext: {
    next: PostLinkProps
    previous: PostLinkProps
  }
  isEditing: boolean
  setIsEditing: (callback: (isEditing: boolean) => boolean) => void
}

const BlogPost = ({ data, pageContext, isEditing, setIsEditing }: Props) => {
  const { frontmatter, html, excerpt } = data.markdownRemark
  const { next, previous } = pageContext

  return (
    <Layout>
      <SEO title={frontmatter.title} description={excerpt} />
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
            {process.env.NODE_ENV !== 'production' && (
              <TinaButton primary onClick={() => setIsEditing(p => !p)}>
                {isEditing ? 'Close' : 'Edit'}
              </TinaButton>
            )}
          </div>
        </div>
        <section className="py-6 leading-normal markdown">
          <TinaField name="rawMarkdownBody" Component={Wysiwyg}>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </TinaField>
        </section>
        <hr className="border-b-2 border-gray-400 mb-8" />
        <PostLinks {...{ next, previous }} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "Do MMMM YYYY")
      }
      ...TinaRemark
    }
  }
`

const BlogPostForm = {
  fields: [
    {
      label: 'Title',
      name: 'frontmatter.title',
      component: 'text',
    },
    {
      label: 'Path',
      name: 'frontmatter.path',
      description: 'Enter the post URL',
      component: 'text',
      defaultValue: '/blog/',
    },
    {
      label: 'Date',
      name: 'frontmatter.date',
      component: 'date',
      dateFormat: 'Do MMMM YYYY',
      timeFormat: false,
      defaultValue: new Date(),
    },
  ],
}

export default liveRemarkForm(BlogPost, BlogPostForm)
