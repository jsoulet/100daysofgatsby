import React from 'react'
import {Link} from 'gatsby'

const PostLink = ({path, title, date}) => {
    return <Link to={path} className="text-base md:text-sm text-teal-500 font-bold no-underline hover:underline">{title} ({date})</Link>
}

export default PostLink;