import React from "react"
import Layout from "../components/layout"
import Hero from "../components/utilities/Hero"
import DaysHeader from "../components/utilities/100daysHeader"
import DaysInfo from "../components/utilities/100daysInfo"
import PostList from '../components/PostList'
import { FaTwitter } from 'react-icons/fa'
import { graphql, useStaticQuery } from 'gatsby'
import SEO from "../components/seo"


const getPosts = graphql`
{
  allMdx(sort: {fields:frontmatter___date, order: DESC}) {
    totalCount
    edges {
      node {
        frontmatter {
          title
          subtitle
          slug
          date(formatString: "MMMM D, YYYY")
          author
        }
        excerpt
      }
    }
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


export default ({data}) => {
  const response = useStaticQuery(getPosts)
  const posts = response.allMdx.edges
  return (
    <Layout>
    <SEO title="100 Days of Gatsby" description="Taking on the #100DaysofGatsby Challenge, starting January 1, 2020. Here, I will share with you the journey, the highlights and lowlights each day and simply share my experience." />
    <Hero img={data.defaultBG.childImageSharp.fluid}>
    <DaysHeader title="#100 Days of Gatsby" subtitle="Taking on the Challenge!" />
    </Hero>
    <DaysInfo />
    <PostList posts={posts}/>
    <div className="container text-center mt-5 mb-3">
        <h1 className="day-featured-text pt-2 pb-3">For quick daily updates, follow me on  <a href="https://twitter.com/LBMedia7" target="_blank" rel="noopener noreferrer"><FaTwitter className="day-icon" /></a> </h1>
    </div>
    </Layout>
  )
}

