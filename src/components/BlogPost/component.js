import React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from "../Layout"
import PostLinks from './PostLinks'
import SEO from "../seo"

const BlogPost = ({data, pageContext}) => {
    const {frontmatter, html} = data.markdownRemark
    const {next, previous} = pageContext
    return <Layout>
        <SEO title={frontmatter.title}/>
        <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal" style={{fontFamily:'Georgia,serif'}}>
            <div className="font-sans">
                <span className="text-base md:text-sm text-teal-500 font-bold">&lt; </span>
                    <Link to="/" className="text-base md:text-sm text-teal-500 font-bold no-underline hover:underline">HOME</Link>
                <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">{frontmatter.title}</h1>
                <p className="text-sm md:text-base font-normal text-gray-600">{frontmatter.date}</p>
            </div>
            <div className="py-6 leading-normal markdown" dangerouslySetInnerHTML={{ __html: html }} />
            <hr className="border-b-2 border-gray-400 mb-8"/>
            <PostLinks {...{next, previous}}/>
        </div>
    </Layout>
}

export const pageQuery = graphql`
    query($id: String!) {
        markdownRemark(id: {eq : $id}) {
            html
            frontmatter {
                title,
                date(formatString: "Do MMMM YYYY")
            }
        }
    }
`

export default BlogPost