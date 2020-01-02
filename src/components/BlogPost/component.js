import React from 'react'
import {graphql} from 'gatsby'
import Layout from "../Layout"

const BlogPost = (props) => {
    console.log(props)
    const {frontmatter, html} = props.data.markdownRemark
    return <Layout>
        <div>
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
}

export const pageQuery = graphql`
    query($id: String!) {
        markdownRemark(id: {eq : $id}) {
            html
            frontmatter {
                title,
                date(formatString: "DD-MM-YYYY")
            }
        }
    }
`

export default BlogPost