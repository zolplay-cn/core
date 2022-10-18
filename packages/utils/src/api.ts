import { AxiosRequestConfig, Axios } from 'axios'

export const API = new Axios({
  baseURL: '/api',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
})

export const authorizeAPI = (token: string) => {
  API.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const configureAPI = (
  options: Pick<AxiosRequestConfig, 'baseURL' | 'headers' | 'withCredentials'>
) => {
  API.defaults = Object.assign(API.defaults, options)
}
