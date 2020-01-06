import React from 'react'
import Layout from "../components/layout"
import Hero from "../components/utilities/Hero"
import DaysHeader from "../components/utilities/100daysHeader"
import DaysInfo from "../components/utilities/100daysInfo"
import PostCard from '../components/PostCard'
import { FaChevronCircleRight, FaChevronCircleLeft, FaTwitter } from 'react-icons/fa'
import { graphql } from 'gatsby'
import Anilink from 'gatsby-plugin-transition-link/AniLink'
import SEO from "../components/seo"


const Blog = (props) => {
    const {currentPage, numPages} = props.pageContext 
    const previousPage = currentPage - 1 === 1? `/` : `/${currentPage - 1}`
    const nextPage = `/${currentPage + 1}`
    const isFirst = currentPage ===1
    const isLast = currentPage === numPages
    

    const {data} = props
    return (
    <Layout>
    <SEO title="100 Days of Gatsby" description="Taking on the #100DaysofGatsby Challenge, starting January 1, 2020. Here, I will share with you the journey, the highlights and lowlights each day and simply share my experience." />
    <Hero img={data.defaultBG.childImageSharp.fluid}>
    <DaysHeader title="#100 Days of Gatsby" subtitle="Taking on the Challenge!" />
    </Hero>
    <DaysInfo />
    <div className="container text-center">
    {data.posts.edges.map(({node}, index) => {
        return <PostCard key = {index} post={node} />
    })}
    </div>
    <div className="container bt-links pt-4">
    { !isFirst&& (
        <Anilink fade to={previousPage} className="btn-text pb-1"><FaChevronCircleLeft className="link-icon"/> Recent Posts </Anilink>
    )}
    
    {Array.from({length:numPages},(_,i) => {
        return <Anilink key={i} fade to={`/${i === 0? "" : i + 1}`} className={i+1===currentPage? `bt-link bt-link-active` : `bt-link`}>{i + 1}</Anilink>
    })}

    { !isLast&& (
        <Anilink fade to={nextPage} className="btn-text pb-1">Older Posts <FaChevronCircleRight className="link-icon"/></Anilink>
    )}
    
    </div>
    <div className="container text-center mt-5 mb-3">
        <h1 className="day-featured-text pt-2 pb-3">For quick daily updates, follow me on  <a href="https://twitter.com/LBMedia7" target="_blank" rel="noopener noreferrer"><FaTwitter className="day-icon" /></a> </h1>
    </div>
    </Layout>
    )
}

export const pageQuery = graphql`
query getBlogPost($skip: Int!, $limit: Int!) {
  posts: allMdx(skip: $skip, limit: $limit, sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        frontmatter {
          slug
          title
          subtitle
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

export default Blog