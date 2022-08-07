import React from 'react'
import { useNavigate } from 'react-router-dom'

const RecentPostItem = ({ id, categoryId, title }) => {

    const navigate = useNavigate()

    const handleRecentPostClick = () => {
        const paramTitle = title.replaceAll(" ", "_")
        navigate(`/${categoryId}/posts/${paramTitle}`, { state: { id } })
    }

    return (
        <div className='recentPostItem mt-4' style={{ cursor: 'pointer' }} onClick={handleRecentPostClick}>
            <h4 className='h6 fw-bolder'>{title}</h4>
        </div>
    )
}

export default RecentPostItem