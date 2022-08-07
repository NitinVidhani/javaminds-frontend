import React from 'react'
import './style.css'

const NotFound = () => {
    return (
        <>
            <div className="not-found-page d-flex justify-content-center flex-column align-items-center">
                <h1 className='display-1'>Oops</h1>
                <p className='mt-2'>404! Not Found</p>
            </div>
        </>
    )
}

export default NotFound