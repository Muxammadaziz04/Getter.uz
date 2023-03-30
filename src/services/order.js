import api from "./api"

export const createOrder = (data) => api.post('/order', data)