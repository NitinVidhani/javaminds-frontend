import React from 'react'
import { useAuth } from '../util/auth';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const PostCard = ({ id, title, category, content, loadPosts, categoryId }) => {
    const { user } = useAuth()
    const navigate = useNavigate()

    const authAxios = axios.create({
        baseURL: "http://localhost:9090/api/",
        headers: {
            Authorization: `Bearer ${user.authToken}`
        }
    });

    const handleDeletePost = async () => {
        try {
            await authAxios.delete(`posts/${id}`)
            loadPosts()
        } catch (err) {
            console.log(err)
        }
    }


    const handleUpdatePost = () => {
        navigate('add', {
            state: {
                id: id,
            }
        })
    }

    return (
        <div className="col-md-6 card shadow m-2" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
                <p className="card-text">{content.length > 60 ? `${content.substring(0, 60)}...` : content}</p>
                <span className="card-link action" onClick={handleUpdatePost}>Update</span>
                <span className="card-link action" onClick={handleDeletePost}>Delete</span>
            </div>
        </div>
    )
}

export default PostCard