import React from 'react'
import { useNavigate } from 'react-router-dom'

import './style.css'

const PartialBlog = ({ id, title, content }) => {

    const navigate = useNavigate()

    const handlePostClick = async () => {
        const paramTitle = title.replaceAll(" ", "_")
        navigate(paramTitle, { state: { id } })
    }

    return (
        <div className='partialBlog border rounded overflow-hidden mb-4 shadow-sm h-md-250' style={{ cursor: 'pointer' }} onClick={handlePostClick}>
            <div className="partialBlog__content p-4 d-flex flex-column position-static">
                <h2>{title}</h2>
                <p className='partialContent card-text mt-2'>{content}</p>
            </div>
        </div>
    )
}

export default PartialBlog