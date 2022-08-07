import React, { useEffect, useState } from 'react'
import './style.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Header from '../../admin-components/Header'
import Posts from '../../admin-components/Posts'
import Categories from '../../admin-components/Categories'
import Users from '../../admin-components/Users'
import AddUser from '../../admin-pages/AddUser'
import AddPost from '../../admin-pages/AddPost'
import { useAuth } from '../../util/auth'

const Dashboard = () => {

    const { user, login } = useAuth()

    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        if (sessionStorage.getItem('user') != null) {
            const user = JSON.parse(sessionStorage.getItem('user'))
            login(user)
            setIsAdmin(user.roles.includes('Admin'))
        }
    }, [])

    return (
        <div className='dashboard'>
            <Header />
            <div className="container-fluid" >
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse fs-6 shadow">
                        <div className="position-sticky pt-3">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <NavLink className="nav-link text-secondary" to="posts">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file" aria-hidden="true"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                                        <span className='ms-2'>Posts</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    {
                                        isAdmin &&
                                        <NavLink className="nav-link text-secondary" to="categories">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart" aria-hidden="true"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                            <span className='ms-2'>Categories</span>
                                        </NavLink>}

                                </li>
                                <li className="nav-item">
                                    {
                                        isAdmin &&
                                        <NavLink className="nav-link text-secondary" to="users">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users" aria-hidden="true">
                                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                            </svg>
                                            <span className="ms-2">Users</span>
                                        </NavLink>
                                    }
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-2'>
                        <Routes>
                            <Route index element={<Posts />} />
                            <Route path='/add' element={<AddPost />} />
                            <Route path='/posts' element={<Posts />} />
                            <Route path='/categories' element={<Categories />} />
                            <Route path='/users' element={<Users />} />
                            <Route path='/users/add' element={<AddUser />} />
                            <Route path='/posts/add' element={<AddPost />} />
                        </Routes>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Dashboard