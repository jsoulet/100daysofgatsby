import React, { FunctionComponent } from 'react'
import PostLink from './component'

import { PostLinkProps } from './index'

interface Props {
  post: PostLinkProps
}

const PostLinkContainer: FunctionComponent<Props> = ({ post }) => {
  return (
    <PostLink
      path={post.node.frontmatter.path}
      title={post.node.frontmatter.title}
      date={post.node.frontmatter.date}
      image={post.node.frontmatter.featuredImage}
      excerpt={post.node.excerpt}
    />
  )
}

export default PostLinkContainer
