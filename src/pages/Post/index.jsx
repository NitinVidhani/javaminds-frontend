import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import RecentPosts from '../../components/RecentPosts'
import Topbar from '../../components/Topbar'
import { getPostByPostId } from '../../services/PostService'
import parse from 'html-react-parser'
import './style.css'

const Post = () => {
    const location = useLocation()

    const [post, setPost] = useState({ title: '', data: '' })

    const loadPost = async () => {
        const response = await getPostByPostId(location.state.id)
        if (response) setPost(response)
    }
    useEffect(() => {
        loadPost()
    }, [location.state.id])


    return (
        <>
            <Topbar />
            <div className="container">
                <div className="row gx-5">
                    <div className="col-md-9">
                        <h1 className='h1 mt-3'>{post.title}</h1>
                        <p className='fs-5 mt-3 lh-base'>
                            {
                                // post.data?.split("\n").map(function (item, idx) {
                                //     return (
                                //         <span key={idx}>
                                //             {item}
                                //             <br />
                                //         </span>
                                //     )
                                // })
                                parse(post.data)
                            }
                        </p>
                    </div>
                    <div className="col-md-3">
                        <RecentPosts />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post