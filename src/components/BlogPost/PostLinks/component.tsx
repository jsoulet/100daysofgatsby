import React from 'react'
import PostLink from './PostLink'
import { PostLink as PostLinkType } from './index'
interface PostLinksProps {
  next: PostLinkType | null
  previous: PostLinkType | null
}
const PostLinks = ({ next, previous }: PostLinksProps) => {
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
