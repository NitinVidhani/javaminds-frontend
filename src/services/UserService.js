import api from '../api'
import axios from 'axios'

/* ************************** GET Requests ************************* */
export const getUsers = async (token) => {
    const authAxios = axios.create({
        baseURL: "http://localhost:9090/api/",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    try {
        const response = await authAxios.get("users")
        return response.data
    } catch (error) {
        return null
    }
}


export const authenticate = async (user) => {
    try {
        const response = await api.post("users/authenticate", user)
        console.log(response.data)
        sessionStorage.setItem('user', JSON.stringify(response.data))
        return response.data
    } catch (error) {
        return null
    }
}

