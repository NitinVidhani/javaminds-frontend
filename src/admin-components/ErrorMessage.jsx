import React from 'react'

const ErrorMessage = ({ message }) => {
    return (
        <>
            {message !== "" && <p>{message}</p>}
        </>
    )
}

export default ErrorMessage