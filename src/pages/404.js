import React from "react"
import NotFound from '../images/notFound.png'
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
  <SEO title="404: Not found" />
  <div className="container text-center">
    <img className="notfound-img" src={NotFound} alt="Page Not Found"/>
    </div>
    <div className="container pb-4 text-center">
    <h1 className="notfound-text">You just found a little corner of the web that doesn't exist...</h1>
    <p>Don't worry... Just use the Navigation at the top of your screen to find your way back.</p>
    </div>
  </Layout>
)


export default NotFoundPage