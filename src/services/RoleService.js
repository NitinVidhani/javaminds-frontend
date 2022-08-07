import api from '../api';

/* ****************** GET Requests ****************** */
export const getRoles = async () => {
    try {
        const response = await api.get('roles')
        return response.data
    } catch (error) {
        return []
    }
}

export const getRoleByRoleName = async (roleName) => {
    try {
        const response = await api.get(`roles/${roleName}`)
        return response.data
    } catch (error) {
        return []
    }
}