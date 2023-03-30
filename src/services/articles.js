import api from "./api"

export const GetArticles = async () => {
    const response = await api.get('/article' + `?isActive=${true}`);
    return response.data;
}

export const GetArticlesbyid = async (id) => {
    const response = await api.get('/article'+ `/${id}`);
    return response?.data;
}

export const GetArticlesbycategoryId = async (id) => {
    const response = await api.get('/article/category'+ `/${id}`);
    return response?.data;
}
export const createArticles = (data) => api.post('/article', data, { withCredentials: true })