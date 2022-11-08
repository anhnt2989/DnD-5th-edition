import axios, { AxiosError } from 'axios'

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
)

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error: AxiosError) {
    return Promise.reject(error)
  }
)

export default axios
