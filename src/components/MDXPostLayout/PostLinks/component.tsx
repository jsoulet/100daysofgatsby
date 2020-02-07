import React, { FunctionComponent } from 'react'
import PostLink from './PostLink'
import { PostLinkInterface } from './index'
interface PostLinksProps {
  next: PostLinkInterface | null
  previous: PostLinkInterface | null
}
const PostLinks: FunctionComponent<PostLinksProps> = ({ next, previous }) => {
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
