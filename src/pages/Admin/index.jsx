import React, { useEffect, useState } from 'react'
import { authenticate } from '../../services/UserService'
import { useAuth } from '../../util/auth'
import { useNavigate } from 'react-router-dom'
import './style.css'


const Admin = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const auth = useAuth()

    const handleLogin = async (evt) => {
        evt.preventDefault()
        const loggedinUser = await authenticate({ username, password })
        if (loggedinUser !== null) {
            auth.login(loggedinUser)
            navigate('/dashboard')
        } else {
            // Invalid credentials
        }
    }

    useEffect(() => {
        if (auth.user !== null) {
            navigate('/dashboard')
        }
    }, [])


    return (
        <div className="admin text-center d-flex justify-content-center align-items-center" >
            <main className='form-signin'>
                <form>
                    <h2 className='h2 fw-bold mb-3 admin-head'>Javaminds</h2>
                    <h3 className='h3 fw-normal mb-4'>Please sign in</h3>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setUsername(e.target.value)} />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button className="w-100 btn btn-lg text-white admin-button" type="submit" onClick={handleLogin}>Sign in</button>
                    <p className="mt-4 mb-3 text-muted">© 2022</p>
                </form>
            </main>
        </div >
    )
}

export default Admin