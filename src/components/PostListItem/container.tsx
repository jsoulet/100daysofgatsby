import React from 'react'
import PostLink from './component'

import { PostLinkProps } from './index'

interface Props {
  post: PostLinkProps
  excerpt: string
}

const PostLinkContainer = ({ post, excerpt }: Props) => {
  return (
    <PostLink
      path={post.node.fields.slug}
      title={post.node.frontmatter.title}
      date={post.node.frontmatter.date}
      image={post.node.frontmatter.featuredImage}
      excerpt={excerpt}
    />
  )
}

export default PostLinkContainer
