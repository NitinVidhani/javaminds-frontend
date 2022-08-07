import React from 'react'
import { useAuth } from '../util/auth'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        console.log("logout")
        sessionStorage.clear()
        auth.logout()
        navigate("/admin")
    }
    return (
        <header className="dashboard-header navbar navbar-dark sticky-top flex-md-nowrap p-1 shadow">
            <NavLink className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-5" to="/">Javaminds</NavLink>
            <button className="navbar-toggler d-md-none collapsed mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <input className="form-control w-100 mx-2" type="text" placeholder="Search" aria-label="Search" />
            <div className="navbar-nav">
                <div className="nav-item text-nowrap">
                    <div onClick={handleLogout} className="nav-link px-3" style={{ cursor: 'pointer' }}>Sign out</div>
                </div>
            </div>
        </header>
    )
}

export default Header;