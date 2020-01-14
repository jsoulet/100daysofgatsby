import React from 'react'
import cn from 'classnames'
import { Link } from 'gatsby'

interface Props {
  isPrevious?: boolean
  title: string
  link: string
}

const PostLink = ({ isPrevious, title, link }: Props) => {
  return (
    <div
      className={cn({ 'text-right': !isPrevious, 'text-left': !isPrevious })}
    >
      <span className="text-xs md:text-sm font-normal text-gray-600">
        {isPrevious && <span>&lt; </span>}
        {isPrevious ? 'Previous' : 'Next'} Post
        {!isPrevious && <span> &gt;</span>}
      </span>
      <br />
      <p>
        <Link
          to={link}
          className="break-normal text-base md:text-sm text-teal-500 font-bold no-underline hover:underline"
        >
          {title}
        </Link>
      </p>
    </div>
  )
}

export default PostLink
