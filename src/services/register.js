import api from './api'

export const RegisterUser = async (data) => {
    const res= await api.post('/users', data,{withCredentials:true})
    return res;
}

export const loginUser = async (data) => {
    const res= await api.post('/auth/login', data,{withCredentials:true})
    return res
}