import api from "./api"

export const GetPosition = async () => {
    const response = await api.get('/position');
    return response.data;
}