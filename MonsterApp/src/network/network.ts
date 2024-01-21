import axios, {AxiosRequestConfig} from 'axios';
import {BASE_URL} from './endpoints';

const API_TIMEOUT = 1000;

export const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: API_TIMEOUT,
});

export const makeNetworkCall = (requestConfig: AxiosRequestConfig) => {
  return AxiosInstance.request(requestConfig);
};
