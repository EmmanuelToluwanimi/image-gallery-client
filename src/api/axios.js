import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000/api'

export const uploadImage = (data) => axios.post("/images", data)
export const getAllImages = ()=> axios.get("/images")