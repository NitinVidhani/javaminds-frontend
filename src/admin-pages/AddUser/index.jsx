import axios from 'axios'
import React, { useState } from 'react'
import { useAuth } from '../../util/auth'
import { useNavigate } from 'react-router-dom'

const AddUser = ({ loadUsers }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({})

    const auth = useAuth()

    const saveUser = async (evt) => {
        evt.preventDefault()
        const authAxios = axios.create({
            baseURL: "http://localhost:9090/api/",
            headers: {
                Authorization: `Bearer ${auth.user.authToken}`
            }
        });

        try {
            const response = await authAxios.post("users/register", user)
            navigate(-1)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="addUser text-center d-flex justify-content-center align-items-center" style={{ height: "92vh" }}>
            <main className='form-signin'>
                <form>
                    <h3 className='h3 fw-normal mb-4'>Add New User</h3>
                    <div className="form-floating">
                        <input onChange={(evt) => setUser({ ...user, username: evt.target.value })} type="text" className="form-control" id="userName" placeholder="Username" required />
                        <label htmlFor="userName">Username</label>
                    </div>
                    <div className="form-floating">
                        <input onChange={(evt) => setUser({ ...user, password: evt.target.value })} type="password" className="form-control" id="password" placeholder="Password" required />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="form-floating">
                        <input onChange={(evt) => setUser({ ...user, name: evt.target.value })} type="text" className="form-control" id="name" placeholder="Full Name" required />
                        <label htmlFor="name">Full Name</label>
                    </div>
                    <div className="form-floating">
                        <input onChange={(evt) => setUser({ ...user, email: evt.target.value })} type="email" className="form-control" id="email" placeholder="Email" required />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={(evt) => setUser({ ...user, phone: evt.target.value })} type="text" className="form-control" id="Phone" placeholder="Phone" required />
                        <label htmlFor="Phone">Phone</label>
                    </div>
                    <button className="w-100 btn btn-lg text-white admin-button" type="submit" onClick={saveUser}>Add</button>
                    <p className="mt-4 mb-3 text-muted">© 2022</p>
                </form>
            </main>
        </div >
    )
}

export default AddUser