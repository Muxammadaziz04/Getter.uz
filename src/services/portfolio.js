import api from './api'

export const getPortfolio = async ({limit = '200', page = '1'} = {}) => {
    const res = await api.get(`/portfolio?limit=${limit}&page=${page}`)
    return res?.data
}