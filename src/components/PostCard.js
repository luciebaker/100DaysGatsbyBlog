import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaChevronCircleRight } from 'react-icons/fa'

const PostCard = ({post}) => {
    const {title, subtitle, date, author, slug} = post.frontmatter
    return (
        
        <div className="container day-container text-left">
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <h6>
            <span>By {author} </span> | <span>{date}</span>
            </h6>
            <p className="pt-2">{post.excerpt}</p>
        
            <div className="text-right">
                <AniLink fade to={slug}>
                <h5 className="btn-text pb-1">Read More <FaChevronCircleRight className="link-icon"/></h5>
                </AniLink>
            </div>
        </div>
    )
}

export default PostCard