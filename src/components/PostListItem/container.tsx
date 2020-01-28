import React from 'react'
import PostLink from './component'

import { PostLinkProps } from './index'

interface Props {
  post: PostLinkProps['node']
  excerpt: string
}

const PostLinkContainer = ({ post, excerpt }: Props) => {
  return (
    <PostLink
      path={post.frontmatter.path}
      title={post.frontmatter.title}
      date={post.frontmatter.date}
      image={post.frontmatter.featuredImage}
      excerpt={excerpt}
    />
  )
}

export default PostLinkContainer
