import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://10.90.0.103:8080'
})