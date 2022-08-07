import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import { getCategories } from '../services/CategoryService'
import './style.css'
import CategoryModal from './CategoryModal'

const Categories = () => {
    const [categories, setCategories] = useState([])

    const getAllCategories = async () => {
        const allCategories = await getCategories();
        if (allCategories) setCategories(allCategories)
    }

    useEffect(() => {
        getAllCategories()
    }, [])

    return (
        <>
            <div className='categories row gx-2'>
                <div className="add-card col-md-6 card shadow m-2" data-bs-toggle="modal" data-bs-target="#addCategoryModal">
                    <div className="card-body d-flex justify-content-center align-items-center">
                        +
                    </div>
                </div>
                {/* Modal  */}
                <CategoryModal loadCategories={getAllCategories} />
                {
                    categories.map((category) => (
                        <CategoryCard key={category.id} id={category.id} name={category.name} description={category.description} loadCategories={getAllCategories} />
                    ))
                }
            </div>
        </>
    )
}

export default Categories