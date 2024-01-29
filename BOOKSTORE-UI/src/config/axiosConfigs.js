import axios from 'axios'


const axiosroot = axios.create({
    baseURL: "http://localhost:3001"
})

export default axiosroot;