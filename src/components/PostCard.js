import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaChevronCircleRight } from 'react-icons/fa'

const PostCard = ({post}) => {
    const {title, subtitle, date, author, slug} = post.frontmatter
    return (
        <div className="container">
            <div className="info">
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <h6>
            <span>By {author} </span> | <span>{date}</span>
            </h6>
            <p>{post.exerpt}</p>
            </div>
            <div className="text-center">
                <AniLink fade to={slug}>
                <h5 className="btn-text mb-5">Read More <FaChevronCircleRight className="link-icon"/></h5>
                </AniLink>
            </div>
        </div>
    )
}

export default PostCard