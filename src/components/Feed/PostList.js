import React from 'react'
import Post from '../../entities/Post'

const PostList = ({ posts }) => {

    return (
        <div>
            {posts.map(post => <Post key={post.id} id={post.id} type={post.type} content={post.type === 'text' ? post.text : post.type === 'image' ? post.imageUrl : post.videoUrl} />)}
        </div>
    )
}

export default PostList