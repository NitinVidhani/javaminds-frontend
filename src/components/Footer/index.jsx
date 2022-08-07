import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './style.css'

const Footer = () => {
    return (
        <div style={{ backgroundColor: 'var(--color-secondary)' }}>
            <div className='container'>
                <footer className='row row-cols-4 py-5 my-5'>
                    <div className="col">
                        <Link to="/" className='h3 d-flex align-items-center mb-3 link-light text-decoration-none'>Javaminds</Link>
                        <p className='text-muted'>© 2022</p>
                    </div>
                    <div className="col"></div>
                    <div className="col">
                        <h5 className='text-light'>Navigation</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item text-light mb-2"><NavLink to="/">Home</NavLink></li>
                            <li className="nav-item text-light mb-2"><NavLink to="/about">About</NavLink></li>
                            <li className="nav-item text-light mb-2"><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5 className='text-light'>Socials</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item text-light mb-2">Instagram</li>
                            <li className="nav-item text-light mb-2">Linkedin</li>
                            <li className="nav-item text-light mb-2">Facebook</li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer