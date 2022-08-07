import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'
import { getCategories, getTopCategory } from '../../services/CategoryService'
import { handleScroll } from '../../util/utils'

const Topbar = () => {

    useEffect(() => {
        handleScroll()
        window.addEventListener('scroll', handleScroll);
    }, [])

    // Active Link Styles of category
    const activeLinkStyles = ({ isActive }) => {
        return {
            backgroundColor: isActive && 'var(--color-red)',
        }
    }

    const [categories, setCategories] = useState([])
    const [topCategory, setTopCategory] = useState({})

    const getAllCategories = async () => {
        const allCategories = await getCategories()
        if (allCategories) {
            setCategories(allCategories);
        }
    }
    const getFirstCategory = async () => {
        const topCategory = await getTopCategory()
        if (topCategory) setTopCategory(topCategory)
    }
    useEffect(() => {
        getAllCategories()
        getFirstCategory()
    }, [])


    return (
        <nav id='topbar' className={`navbar navbar-expand navbar-dark color-primary-light shadow p-0`}>
            <div className="container">
                <div>
                    <ul className="navbar-nav">
                        {
                            categories.map((category) => (
                                <li key={category.id} className="nav-item">
                                    <NavLink style={activeLinkStyles}
                                        to={`/${category.id}/posts`} className="nav-link">{category.name}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Topbar