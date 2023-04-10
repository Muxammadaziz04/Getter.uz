import api from "./api"

export const getArticles= async ({limit = '200', page = '1'} = {}) => {
    const res = await api.get(`/article?limit=${limit}&page=${page}`)
    return res?.data
}