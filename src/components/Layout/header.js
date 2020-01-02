import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import cn from 'classnames'

const Header = ({ siteTitle }) => {
  const [isNavHidden, setIsNavHidden] = useState(true);
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);
  
  const handleOnNavButtonClick = () => {
    setIsNavHidden(!isNavHidden)
  }

  useEffect(() => {
    const scrollListenner = () => {
      if(window.scrollY <= 10) {
        setIsHeaderTransparent(true)
      } else {
        setIsHeaderTransparent(false)
      }
      
    }
    window.addEventListener('scroll', scrollListenner)
    return () => window.removeEventListener('scroll', scrollListenner)
  })

  return <header id="header" className={cn("fixed w-full top-0 z-10", {'bg-white shadow': !isHeaderTransparent})}>
    <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
      
      <div className="pl-4">
        <Link className="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl"  to="/"> 
          {siteTitle}
        </Link>
      </div>

			<div className="block lg:hidden pr-4">
				<button onClick={handleOnNavButtonClick} id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-teal-500 appearance-none focus:outline-none">
					<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
				</button>
			</div>

			<nav className={
        cn('w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 bg-white md:bg-transparent lg:items-center',
        { hidden: isNavHidden, 'bg-white': !isHeaderTransparent, 'bg-gray-100': isHeaderTransparent },
        )
      } id="nav-content">
				<ul className="list-reset mb-0 lg:flex justify-end flex-1 items-center">
					<li className="mr-3 mb-0">
						<Link className="inline-block py-2 px-4 text-gray-900 font-bold no-underline" to="/">Active</Link>
					</li>
					<li className="mr-3 mb-0">
						<Link className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4" to="/">link</Link>
					</li>
					<li className="mr-3 mb-0">
						<Link className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4" to="/">link</Link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
