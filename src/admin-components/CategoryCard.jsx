import React from 'react'
import { deleteCategory } from '../services/CategoryService'
import { useAuth } from '../util/auth'
import UpdateCategoryModal from './UpdateCategoryModal';

const CategoryCard = ({ id, name, description, loadCategories }) => {

    const { user } = useAuth();

    const handleDeleteCategory = async () => {
        await deleteCategory(user.authToken, id)
        loadCategories()
    }

    const handleUpdate = () => {
    }

    return (
        <div className="col-md-6 card shadow m-2" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <span className="card-link action" onClick={handleUpdate} data-bs-toggle="modal" data-bs-target="#updateCategoryModal">Update</span>
                <span className="card-link action" onClick={handleDeleteCategory} >Delete</span>
                <UpdateCategoryModal loadCategories={loadCategories} categoryId={id} />
            </div>
        </div>
    )
}

export default CategoryCard