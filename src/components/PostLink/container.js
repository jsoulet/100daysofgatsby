import React from 'react'
import PostLink from './component'

const PostLinkContainer = ({post}) => {
    return <PostLink path={ post.frontmatter.path } title={post.frontmatter.title } date={post.frontmatter.date}/>
}

export default PostLinkContainer