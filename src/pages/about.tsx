import React, { useState, useCallback } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import ContactForm from '../components/ContactForm'
import Image, { FluidObject } from 'gatsby-image'
import { submit } from '../services/forms/contactForm'
import { ContactFormValues } from '../components/ContactForm'

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

const formInitialValues: ContactFormValues = {
  email: '',
  firstname: '',
  lastname: '',
  message: '',
}

const AboutPage = ({ data }: Props) => {
  const [isMessageSent, setIsMessageSent] = useState(false)
  const [formErrors, setFormErrors] = useState<string[]>([])
  const onSubmit = useCallback(
    (values: ContactFormValues) => {
      return submit(values)
        .then(() => {
          setFormErrors([])
          setIsMessageSent(true)
        })
        .catch(() => {
          setFormErrors([
            ...formErrors,
            'An error occured while submitting your message. Please refresh the page and retry',
          ])
          setIsMessageSent(false)
        })
    },
    [formErrors, setFormErrors, setIsMessageSent]
  )
  const displayContactForm = useCallback(() => {
    setIsMessageSent(false)
  }, [setIsMessageSent])

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
          {isMessageSent && (
            <div className="relative bg-gray-400 text-center m-6 py-6 text-gray-700">
              <button
                className="text-sm object-right-top absolute right-0 top-0 px-3 py-1"
                onClick={displayContactForm}
                title="Show the contact form"
              >
                ✕
              </button>
              <p>You're message has sucessfully been sent!</p>
              <p className="mb-3">
                Thank you for your support, I'll get back to you soon
              </p>
              <span className="text-3xl">🦸‍♂️</span>
            </div>
          )}
          {!isMessageSent && (
            <ContactForm
              onSubmit={onSubmit}
              initialValues={formInitialValues}
            />
          )}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query AboutPage {
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
