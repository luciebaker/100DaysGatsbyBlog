import React from 'react'
import PostCard from './PostCard'

const PostList = ({ posts }) => {

    return (
        <section className="posts">
        <h1> 100 Days of Gatsby</h1>
        <h4> A day to day blog</h4>
        <div className="center">
        {posts.map(({node}, index) => {
            return <PostCard key = {index} post={node} />
        })}
        </div>
        
        </section>
    )
}

export default PostList