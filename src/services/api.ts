import axios, { AxiosResponse } from "axios";


const api = axios.create({
    baseURL: "http://192.168.2.101:8080",

})


export default api