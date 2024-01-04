import axios from 'axios'

export const axiosInstance = axios.create({
    headers: {
        credentials: 'include',
        method: 'post',
        'Content-Type': "application/json"
    }
})