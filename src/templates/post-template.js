import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaChevronCircleRight } from 'react-icons/fa'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const postTemplate = ({data}) => {
const {title, subtitle, date, author} = data.mdx.frontmatter
const {body} = data.mdx

    return (
        <Layout>
        <div className="container info">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <h4>
        <span>By {author}</span> | <span>{date}</span>
        </h4>
        </div>
        <div className="container content">
        <MDXRenderer>{body}</MDXRenderer>
        </div>
        <div className="text-center">
            <AniLink fade to='/'>
            <h5 className="btn-text mb-5">Return to Homepage <FaChevronCircleRight className="link-icon"/></h5>
            </AniLink>
        </div>
        </Layout>
    )
}

export const query = graphql`
query getPost($slug:String!){
    mdx (frontmatter:{slug:{eq:$slug}}) {
        frontmatter {
        title
        subtitle
        slug
        date(formatString: "MMMM, D, YYYY")
        author
        }
    body
    excerpt
    }
}
`


export default postTemplate