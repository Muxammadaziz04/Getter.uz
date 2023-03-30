import api from "./api"

export const GetPortfolio = async () => {
    const response = await api.get('/portfolio');
    return response.data;
}