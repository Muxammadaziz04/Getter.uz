import api from './api'

export const getRoles = async ({limit = '200', page = '1'} = {}) => {
    const res = await api.get(`/position?limit=${limit}&page=${page}`)
    return res?.data
}