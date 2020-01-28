import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
//import Avatar from '../../../content/images/avatar.jpg'

const Hero = () => {
  const avatar = useStaticQuery(graphql`
    query AvatarQuery {
      allFile(filter: { relativePath: { eq: "avatar.jpg" } }) {
        edges {
          node {
            id
            childImageSharp {
              fixed(width: 80, height: 80) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div className="align-center mb-6">
      <div className="flex content-center mb-4">
        <Image
          className="h-20 w-20 rounded-full m-auto mb-3"
          alt="avatar"
          fixed={avatar.allFile.edges[0].node.childImageSharp.fixed}
        />
      </div>
      <div className="text-xl text-center text-gray-800 m-auto max-w-xl">
        Hi, I'm Johan! To kick off 2020, I'm joining the{' '}
        <a
          href="https://twitter.com/search?q=%23100DaysOfGatsby"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-500 hover:underline"
        >
          #100DaysOfGatsby
        </a>{' '}
        Challenge. This blog will document my journey.
      </div>
    </div>
  )
}

export default Hero
