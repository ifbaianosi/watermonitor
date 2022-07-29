import axios from 'axios'

let baseURL = 'http://10.90.0.103:8080'

// if (import.meta.env.DEV) {
//     baseURL = 'http://10.90.0.101:3000/api'
// }

export const api = axios.create({
    baseURL
})