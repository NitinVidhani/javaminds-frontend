import axios from 'axios'
import React, { useState } from 'react'
import { useAuth } from '../util/auth'
import ErrorMessage from './ErrorMessage'

const CategoryModal = ({ loadCategories }) => {
    const auth = useAuth()

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState("")

    const postCategory = async (token, category) => {
        const authAxios = axios.create({
            baseURL: "http://localhost:9090/api/",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        try {
            const response = await authAxios.post("categories", category)
            setError("")
            return response.data
        } catch (error) {
            setError(error.response.data.message)
            return null
        }
    }


    const saveCategory = async () => {

        await postCategory(auth.user.authToken, { name, description })
        await loadCategories()
        console.log("Error: " + error)
        if (error === "") {
            document.querySelector("#addCategoryModal .modal-close").click()
        }
    }

    return (
        <>
            <div className="modal fade" id="addCategoryModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Category</h5>
                            <button type="button" className="modal-close btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-2">
                                <label htmlFor="categoryName" className="form-label">Category Name</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="categoryName" placeholder="Category Name" required />
                                <ErrorMessage message={error} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="categoryDescription" className="form-label">Category Description</label>
                                <textarea onChange={(e) => setDescription(e.target.value)} className="form-control" id="categoryDescription" rows="3" placeholder='Description'></textarea>                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn modal-close" data-bs-dismiss="modal">Close</button>
                            <button onClick={saveCategory} type="submit" className="btn modal-save">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryModal