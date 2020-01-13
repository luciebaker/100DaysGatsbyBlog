import React from 'react'
import Hero from "../components/utilities/Hero"
import SingleDaysHeader from "../components/utilities/100daysSingleHeader"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaChevronCircleRight, FaTwitter } from 'react-icons/fa'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import SEO from "../components/seo"
    
const postTemplate = ({data}) => {
const {title, subtitle, date, author} = data.mdx.frontmatter
const {body, excerpt} = data.mdx
    
    
    
    return (
            <Layout>
            <SEO title={title} description={excerpt} />
            <Hero img={data.defaultBG.childImageSharp.fluid}>
            <SingleDaysHeader title={title} subtitle={subtitle} author={author} date={date} />
            </Hero>
            <div className="container">
            <div className="day-container-single">
            <MDXRenderer>{body}</MDXRenderer>
            </div>
            </div>
            <div className="text-center pt-3">
                <AniLink fade to='/'>
                <h5 className="btn-text mb-4">Return to #100 Days of Gatsby <FaChevronCircleRight className="link-icon"/></h5>
                </AniLink>
            </div>
            <div className="container text-center mt-5 mb-3">
            <h1 className="day-featured-text pt-2 pb-3">For quick daily updates, follow me on  <a href="https://twitter.com/LBMedia7" target="_blank" rel="noopener noreferrer"><FaTwitter className="day-icon" /></a> </h1>
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
        defaultBG: file(relativePath: {eq: "HeroBG.jpg"}) {
        childImageSharp {
            fluid(quality:90, maxWidth: 4160) {
                ...GatsbyImageSharpFluid
            }
        }
        }
    }
    `
    
    
    export default postTemplate