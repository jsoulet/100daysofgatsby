import React from 'react'
import PostLink from './component'

const PostLinkContainer = ({post, excerpt}) => {
    return <PostLink path={ post.frontmatter.path } title={post.frontmatter.title } date={post.frontmatter.date} excerpt={excerpt}/>
}

export default PostLinkContainer