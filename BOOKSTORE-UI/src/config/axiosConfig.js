import { default as axiosroot } from 'axios'


const axios = axiosroot.create({
    baseURL: "http://localhost:3001"
})

export default axios;