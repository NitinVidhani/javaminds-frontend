import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../util/auth'
import { handleScroll } from '../../util/utils'
import './style.css'

const Navbar = () => {

    const { user, logout } = useAuth();

    useEffect(() => {
        // document.body.style.paddingTop = '0';
    }, [])


    return (
        <nav className='navbar navbar-expand-md navbar-dark color-primary shadow'>
            <div className="container">
                <Link className="navbar-brand" to="/">Javaminds</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item ms-4"><NavLink to="/" className="nav-link">Home</NavLink></li>
                        <li className="nav-item ms-4"><NavLink to="/about" className="nav-link">About</NavLink></li>
                        <li className="nav-item ms-4"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
                        {user && <li onClick={() => logout()} className="nav-item ms-4"><div className="nav-link" style={{ cursor: 'pointer' }}>Logout</div></li>}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar