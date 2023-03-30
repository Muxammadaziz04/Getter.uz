import api from "./api"

export const GetCategory = async () => {
    const response = await api.get('/categories' );
    return response.data;
}

export const GetCategorybyid = async (id) => {
    const response = await api.get('/categories'+ `/${id}`);
    return response?.data;
}