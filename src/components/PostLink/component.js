import React from 'react'
import { Link } from 'gatsby'

const PostLink = ({path, title, date, excerpt}) => {
    return <div className="flex h-full bg-white rounded overflow-hidden shadow-lg mb-6">
            <Link to={path} className="flex flex-wrap no-underline hover:no-underline">
                <div className="w-full md:w-2/3 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                        <div className="w-full font-bold text-xl text-gray-900 px-6 pt-6">{title}</div>
                        <p className="text-gray-800 font-serif text-base px-6">
                            {excerpt}
                        </p>
                    </div>

                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                        <div className="flex items-center justify-between flex-row-reverse">
                            <p className="text-gray-600 text-xs md:text-sm">{date}</p>
                        </div>
                    </div>
                </div>

            </Link>
        </div>
        
}

export default PostLink;