import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Posts.css'

const Posts = () => {
    const [posts, setPosts] = useState([]);
    // console.log(posts[0]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <h2>Posts: {posts.length}</h2>
           <div className='posts-container'>
                {
                    posts.map(post => <Post 
                    key={post.id}
                    post={post}></Post>)
                }
           </div>
        </div>
    );
};

export default Posts;