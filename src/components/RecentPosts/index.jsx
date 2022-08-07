import React, { useEffect, useState } from 'react'
import { getRecentPosts } from '../../services/PostService'
import RecentPostItem from '../RecentPostItem'

const RecentPosts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            const recentPosts = await getRecentPosts()
            if (recentPosts) {
                setPosts(recentPosts)
            }
        }
        getPosts()
    }, [])


    return (
        <div className='recentPosts mt-3'>
            <h3 className='h3' style={{ color: 'var(--color-primary)' }}>Recent Posts</h3>
            {
                posts.map(post => (
                    <RecentPostItem key={post.id} id={post.id} categoryId={post.category.id} title={post.title} />
                ))
            }
        </div>
    )
}

export default RecentPosts