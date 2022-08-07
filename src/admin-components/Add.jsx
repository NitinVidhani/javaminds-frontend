import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'


const Add = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("add")
    }

    return (
        <div className='add-button shadow' onClick={handleClick}>
            Add
        </div>
    )
}

export default Add