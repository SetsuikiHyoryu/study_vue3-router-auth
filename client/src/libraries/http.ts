import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  return config
})

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data.error === 1) {
      return Promise.reject(response.data.data)
    }

    return response
  },

  (error) => Promise.reject(error)
)

export default axios
