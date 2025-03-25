/* eslint-disable no-param-reassign */
import axios, { AxiosInstance } from 'axios';

import { API_BASE_URL } from '../urls/index';

const tempoKnowledgeBaseApi: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});


tempoKnowledgeBaseApi.interceptors.request.use((request) => {
  if (request && request.headers) {
   
  }
  return request;
});

tempoKnowledgeBaseApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    return Promise.reject(error);
  }
);

export { tempoKnowledgeBaseApi };
