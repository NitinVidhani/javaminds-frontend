import React, { useEffect, useState } from 'react'
import { useAuth } from '../util/auth'
import { getUsers } from '../services/UserService'
import UserCard from './UserCard'
import Add from './Add'

const Users = () => {
    const auth = useAuth()
    const [users, setUsers] = useState([])

    const getAllUsers = async () => {
        const allUsers = await getUsers(auth.user.authToken);
        if (allUsers) setUsers(allUsers)
    }
    useEffect(() => {
        getAllUsers()
    }, [])
    return (
        <>
            <Add />
            <div className='posts row gx-5'>
                {
                    users.map((user) => (
                        <UserCard key={user.id} id={user.id} username={user.username} name={user.name} email={user.email} phone={user.phone} loadUsers={getAllUsers} />
                    ))
                }
            </div>
        </>
    )
}

export default Users