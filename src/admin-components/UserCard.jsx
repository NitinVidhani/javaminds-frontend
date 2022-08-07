import axios from 'axios';
import React from 'react'
import { useAuth } from '../util/auth';

const UserCard = ({ id, username, name, email, phone, loadUsers }) => {

    const auth = useAuth()

    const handleUserDelete = async () => {

        const authAxios = axios.create({
            baseURL: "http://localhost:9090/api/",
            headers: {
                Authorization: `Bearer ${auth.user.authToken}`
            }
        });

        try {
            await authAxios.delete(`users/${id}`)
            loadUsers()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="col-md-6 card shadow m-2" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{username}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{name}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{phone}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
                <span className="card-link action">Update</span>
                <span className="card-link action" onClick={handleUserDelete}>Delete</span>
            </div>
        </div>
    )
}

export default UserCard