import api from "./api"

export const GetMe = async () => {
    const response = await api.get('/users/me',{withCredentials:true});
    return response.data;
}