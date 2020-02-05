import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import ContactForm from '../components/ContactForm'
import Image, { FluidObject } from 'gatsby-image'

interface Props {
  data: {
    allFile: {
      edges: [
        {
          node: {
            childImageSharp: {
              fluid: FluidObject
            }
          }
        }
      ]
    }
  }
}

const AboutPage = ({ data }: Props) => {
  return (
    <Layout>
      <SEO title="About" />
      <div className="my-12">
        <h1 className="text-gray-900 text-4xl text-center mb-8 font-bold text-teal-600 uppercase">
          I never stop learning.
        </h1>
        <div className="text-lg">
          <p className="mb-6">
            I am Johan, JavaScript developer from Nantes, France 🇫🇷. I love
            clean code, plant based food and gifs.
          </p>
          <div>
            <Image
              className="mb-6 max-w-md mx-auto"
              fluid={data.allFile.edges[0].node.childImageSharp.fluid}
            />
          </div>

          <h2 className="mb-3 text-xl font-bold">#100DaysOfGatsby challenge</h2>
          <p className="mb-6">
            When I first heared about Gatsby last year, I didn't quite
            understand how usefull it was. But I still gave it a try to build a
            small gardening blog. After a few hours of code, I was able to ship
            a high performace website and it was build only with tools I love:
            React and GraphQL.
          </p>
          <p className="mb-6">
            Taking the #100DaysOfGatsby challenge is a great opportunity for me
            to develop my skills and master Gatsby universe. I hope to use it
            soon to create tonnes of new websites!!
          </p>
          <h2 className="mb-3 text-xl font-bold">Contact me</h2>
          <p className="mb-6">
            If you want your own fast and reliable website, or if you just want
            to say hello, feel free to use the contact form below.
          </p>
          <ContactForm onSubmit={() => alert('Unfortunately, this contact form isn\'t plugged to anything yet')} />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query AboutPageQuery {
    allFile(filter: { relativePath: { eq: "rollerskate.jpg" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 400, grayscale: true, quality: 30) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default AboutPage
