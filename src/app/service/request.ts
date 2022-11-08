import { AxiosRequestConfig, Method } from 'axios';

import { apiConfigs } from '@app/config';

import axios from './baseRequest';

export default function request<T>(
  method: Method,
  endpoint: string,
  options?: AxiosRequestConfig
) {
  return new Promise<T>((resolve, reject) => {
    return axios
      .request({
        url: endpoint,
        method,
        baseURL: apiConfigs.BASE_URL,
        ...options,
      })
      .then(async (response) => {
        return resolve(response.data);
      })
      .catch((error) => reject(error));
  });
}
