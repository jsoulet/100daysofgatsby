import React from 'react'
import cn from 'classnames'
import { Link } from 'gatsby'

interface PostLinkProps {
  isPrevious?: boolean
  title: string
  link: string
}

const PostLink = ({ isPrevious, title, link }: PostLinkProps) => {
  return (
    <div className={cn('w-1/2', { 'text-right text-left': !isPrevious })}>
      <span className="text-xs md:text-sm font-normal text-gray-600">
        {isPrevious && <span>&lt; </span>}
        <span>{isPrevious ? 'Previous' : 'Next'} Post</span>
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
