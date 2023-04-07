import axios from "axios";
import { getCookie } from "cookies-next";

const api = axios.create({
    baseURL: "https://api.getter.uz/"
})

// const onResponse = (res) => {
    
//     return res
// }

// const onResponseError = (err) => {
//     const statusCode = err?.response?.status
//     if (statusCode === 401) {
//         axios.post('https://api.getter.uz/auth/refresh')
//     }
//     return Promise.resolve(err)
// }

// api.interceptors.response.use(onResponse, onResponseError)


api.interceptors.request.use((config) => {
    config.headers.access_token_user = getCookie("accessToken");
    return config
})

export default api;