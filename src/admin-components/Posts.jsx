import React, { useEffect, useState } from 'react'
import PostCard from '../admin-components/PostCard'
import { getPosts } from '../services/PostService'
import Add from './Add'

const Posts = () => {
    const [posts, setPosts] = useState([])
    const getAllPosts = async () => {
        const allPosts = await getPosts();
        allPosts.forEach(post => {
            post.data = post.data.replace(/<img.+[/>]/, " ")
            post.data = post.data.replace(/<\/?[^>]+(>|$)/g, " ");
        })
        setPosts(allPosts)
    }
    useEffect(() => {
        getAllPosts()
    }, [])
    return (
        <>
            <Add />
            <div className='posts row gx-5'>
                {
                    posts.map((post) => (
                        <PostCard key={post.id} id={post.id} title={post.title} category={post.category.name} content={post.data} loadPosts={getAllPosts} categoryId={post.category.id} />
                    ))
                }
            </div>
        </>
    )
}

export default Posts