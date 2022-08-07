import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PartialBlog from '../PartialBlog'
import { getPostsByCategoryId } from '../../services/PostService'

const AllPartialBlogs = () => {

    const [posts, setPosts] = useState([])

    const params = useParams()
    const catId = params.categoryId === undefined ? 1 : params.categoryId;

    useEffect(() => {
        const getAllPosts = async () => {
            const allPosts = await getPostsByCategoryId(catId)
            if (allPosts) {
                allPosts.forEach(post => {
                    post.data = post.data.replace(/<img.+[/>]/, " ")
                    post.data = post.data.replace(/<\/?[^>]+(>|$)/g, " ");
                })
                setPosts(allPosts);
            }
        }
        getAllPosts()
    }, [catId])

    return (
        <div className='allPartialBlogs mt-3'>
            {
                posts.map(post => (
                    <PartialBlog key={post.id} id={post.id} title={post.title} content={post.data} />
                ))
            }
        </div>
    )
}

export default AllPartialBlogs