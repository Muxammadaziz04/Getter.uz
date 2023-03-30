import api from "./api"

export const GetWebSite = async () => {
    const response = await api.get('/website' + `?isActive=${true}`);
    return response.data;
}

export const createWebSite = (data) => api.post('/website', data)