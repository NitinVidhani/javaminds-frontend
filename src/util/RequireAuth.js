import React, { useEffect } from 'react'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom'

const RequireAuth = ({ children }) => {
    const auth = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!auth.user && !sessionStorage.getItem('user')) {
            navigate("/admin", { replace: true })
        }
    }, [])

    return children
}

export default RequireAuth