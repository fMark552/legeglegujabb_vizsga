import axios from 'axios'

export const makeRequest = axios.create({
  baseURL: 'http://localhost:2000/api/',
  withCredentials: true,
})
