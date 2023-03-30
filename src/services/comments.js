import api from "./api"

export const AddCamment = async (data) => {
    const response = await api.post('/comment',data,{withCredentials:true} );
    return response.data;
}
