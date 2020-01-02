import React from 'react'
import {Link} from 'gatsby'

const PostLink = ({path, title, date}) => {
    return <Link to={path}>{title} ({date})</Link>
}

export default PostLink;