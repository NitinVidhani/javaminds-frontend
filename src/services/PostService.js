import api from '../api';

/* ****************** GET Requests ****************** */
export const getPosts = async () => {
    try {
        const response = await api.get("posts")
        return response.data
    } catch (error) {
        return []
    }
}

export const getPostsByCategoryId = async (categoryId) => {
    try {
        const response = await api.get(`categories/${categoryId}/posts`)
        return response.data
    } catch (error) {
        return []
    }
}

export const getPostByPostId = async (postId) => {
    try {
        const response = await api.get(`posts/${postId}`)
        return response.data
    } catch (error) {
        return null
    }
}

export const getRecentPosts = async () => {
    try {
        const response = await api.get("posts/recent")
        return response.data
    } catch (error) {
        return []
    }
}

/* ****************** POST Requests ****************** */