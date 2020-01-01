import React from "react"
import Layout from "../components/layout"
import PostList from '../components/PostList'
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
}
`

export default () => {
  const response = useStaticQuery(getPosts)
  const posts = response.allMdx.edges
  return (
    <Layout>
    <SEO title="Home" />
    <PostList posts={posts}/>
    </Layout>
  )
}

