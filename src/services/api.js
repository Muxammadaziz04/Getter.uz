import axios from "axios";

const api = axios.create({
    baseURL: "http://185.74.5.188"
})

const onResponse = (res) => {
    return res
}

const onResponseError = (err) => {
    const statusCode = err?.response?.status
    if (statusCode === 401) {
        axios.post('http://185.74.5.188/auth/refresh')
    }
    return Promise.resolve(err)
}

api.interceptors.response.use(onResponse, onResponseError)

export default api;