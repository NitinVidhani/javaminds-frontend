import api from '../api';
import axios from 'axios'

/* ****************** GET Requests ****************** */
export const getCategories = async () => {
    try {
        const response = await api.get("categories")
        return response.data
    } catch (error) {
        console.error(error)
        return []
    }
}

export const getCategoryByCategoryId = async (categoryId) => {
    try {
        const response = await api.get(`categories/${categoryId}`)
        return response.data
    } catch (error) {
        return []
    }
}

export const getTopCategory = async () => {
    try {
        const response = await api.get(`categories/top`)
        return response.data
    } catch (error) {
        return null
    }
}

export const getCategoryByCategoryName = async (categoryName) => {
    try {
        const response = await api.get(`categories/${categoryName}`)
        return response.data
    } catch (error) {
        return []
    }
}

/* ****************** POST Requests ****************** */

/* ****************** DELETE Requests ****************** */
export const deleteCategory = async (token, id) => {
    const authAxios = axios.create({
        baseURL: "http://localhost:9090/api/",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    try {
        const response = await authAxios.delete(`categories/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
        return null
    }
} 