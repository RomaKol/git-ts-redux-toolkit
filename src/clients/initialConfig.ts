import { AxiosRequestConfig, AxiosResponse } from 'axios';

const inintialConfig = {
  timeout: 10000,
  validateStatus: (status: number) => true,
};

function handleRequest(config: AxiosRequestConfig) {
  return config;
}

function handleResponse(response: AxiosResponse) {
  const { message } = response.data;

  if (response.status < 400) {
    return response.data;
  }

  return Promise.reject(new Error(message || 'Someting went wrong'));
}

const handleResponseError = (error: string) => {
  console.error('LOG---', error);

  return Promise.reject(new Error(error));
};

export {
  inintialConfig as default,
  handleRequest,
  handleResponse,
  handleResponseError,
};
