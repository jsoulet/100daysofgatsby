import React from 'react'
import PostLink from './PostLink'
import { PostLinkProps } from './index'
interface Props {
  next: PostLinkProps
  previous: PostLinkProps
}
const PostLinks = ({ next, previous }: Props) => {
  return (
    <div className="font-sans flex justify-between content-center pb-12">
      {previous ? (
        <PostLink
          isPrevious
          title={previous.frontmatter.title}
          link={previous.frontmatter.path}
        />
      ) : (
        <span />
      )}
      {next ? (
        <PostLink title={next.frontmatter.title} link={next.frontmatter.path} />
      ) : (
        <span />
      )}
    </div>
  )
}

export default PostLinks
