import React, { useEffect, useState } from 'react'
import { getCategories } from '../../services/CategoryService'
import axios from 'axios'
import { useAuth } from '../../util/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import Editor from '../../admin-components/Editor'
import { getPostByPostId } from '../../services/PostService'

const AddPost = () => {

    const { user, login } = useAuth()
    useEffect(() => {
        if (sessionStorage.getItem('user') != null) {
            const user = JSON.parse(sessionStorage.getItem('user'))
            login(user)
        }
    }, [])


    const [categoryId, setCategoryId] = useState()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [id, setId] = useState("")

    const navigate = useNavigate()

    const location = useLocation()

    const [categories, setCategories] = useState([])

    const getAllCategories = async () => {
        const allCategories = await getCategories();
        if (allCategories) setCategories(allCategories)
    }

    useEffect(() => {
        getAllCategories()
        if (location.state) {
            setId(location.state.id)
            getPostByPostId(location.state.id).then(post => {
                setTitle(post.title)
                setContent(post.data)
                setCategoryId(post.category.id)
            })
        }
    }, [])


    // Save Post


    const handleSavePost = async () => {
        const authAxios = axios.create({
            baseURL: "http://localhost:9090/api/",
            headers: {
                Authorization: `Bearer ${user.authToken}`
            }
        });
        try {
            if (id !== "") {
                console.log("Put")
                await authAxios.put(`posts/${id}/${categoryId}`, {
                    title,
                    data: content
                })
                navigate('/dashboard')
            } else {
                console.log("Post")
                await authAxios.post(`categories/${categoryId}/posts`, { title, data: content })
                navigate('/dashboard')
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className='addPost'>
            <h3 className='h3 mb-4'>Add Post</h3>
            <h3 className='h5 fw-normal mb-2'>Category</h3>
            <select className="form-select w-25 mb-4" aria-label="Default select example" value={categoryId} onChange={(e) => { setCategoryId(e.target.value) }}>
                <option selected disabled>Select</option>
                {
                    categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))
                }
            </select>
            <h3 className='h5 fw-normal mb-2'>Title</h3>
            <div className="input-group-lg">
                <input type="text" className="form-control" id="title" onChange={(e) => setTitle(e.target.value)} value={title} />
                <label htmlFor="title" className='' />
            </div>
            <h3 className='h5 fw-normal mb-2'>Content</h3>
            <div className="input-group-lg">
                <Editor content={content} setContent={setContent} />
                {/* <textarea type="text" className="form-control" id="content" rows="6" onChange={(e) => setContent(e.target.value)} style={{ whiteSpace: 'pre-wrap' }} /> */}
                <label htmlFor="content" className='' />
            </div>
            <button onClick={handleSavePost} className="w-25 btn btn-lg text-white" style={{ backgroundColor: 'var(--color-primary)' }}> Save</button>
        </div >
    )
}

export default AddPost