import axios from 'axios';
import { appConfig } from '../../config/app.config';

export const HttpService = {
  get(url: string, query?: any) {
    let queryString = '';
    if (query && Object.keys(query).length > 0) {
      queryString = '?';

      Object.keys(query).forEach((key, index) => {
        queryString += `${key}=${query[key]}`;
        if (index < Object.keys(query).length - 1) {
          queryString += '&';
        }
      });
    }
    
    return axios.get(`${appConfig.apiEndpoint}/${url}` + queryString);
  },

  post(url: string, data: any) {
    return axios.post(`${appConfig.apiEndpoint}/${url}`, data);
  },

  put(url: string, data: any) {
    return axios.put(`${appConfig.apiEndpoint}/${url}`, data);
  },

  delete(url: string) {
    return axios.delete(`${appConfig.apiEndpoint}/${url}`);
  },
};
