import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

import './layout.css'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="bg-gray-100  font-sans leading-normal tracking-normal">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="container w-full md:max-w-3xl mx-auto pt-20 px-5">
          <main>{children}</main>

          <footer></footer>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
