import React from 'react'
import PostCard from './PostCard'

const PostList = ({ posts }) => {

    return (
        <section>
        <div className="text-center">
        {posts.map(({node}, index) => {
            return <PostCard key = {index} post={node} />
        })}
        </div>
        </section>
    )
}

export default PostList