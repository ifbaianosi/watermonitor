import axios from 'axios'

let baseURL = import.meta.env.VITE_API_BASE_URL

if (import.meta.env.DEV) {
    baseURL = 'http://localhost:3000/api'
}

export const api = axios.create({
    baseURL
})