import api from "./api"

export const getPopularSites = async ({limit = '200', page = '1'} = {}) => {
    const res = await api.get(`/website?limit=${limit}&page=${page}`)
    return res?.data
}