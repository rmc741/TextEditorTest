import axios from 'axios';
import React from "react";
import {triggerAlert} from "../services/AlertService";

const api = axios.create({
  // @ts-ignore
  baseURL: window._env_?.VITE_API_URL,
});

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

let requestCount = 0;
let isLoading = false;

type Listener = () => void;
const listeners: Listener[] = [];

const notifyListeners = () => {
  listeners.forEach((listener) => listener());
};

export const useApiLoading = () => {
  const [loading, setLoading] = React.useState(isLoading);

  React.useEffect(() => {
    const listener = () => setLoading(isLoading);
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, []);

  return loading;
};
api.interceptors.request.use(
  async (config) => {
    requestCount++;
    isLoading = requestCount > 0;
    await delay(200);
    const token = "aaa";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      throw new Error("Erro ao recuperar o token")
    }

    if (config.data instanceof FormData) {
      delete config.headers['Content-Type'];
    }
    notifyListeners();
    return config;
  },
  (error) => {
    requestCount = Math.max(requestCount - 1, 0);
    isLoading = requestCount > 0;
    notifyListeners();
    errorMessage(error);
    return Promise.reject(error);
  }
);


api.interceptors.response.use(
  (response) => {
    requestCount = Math.max(requestCount - 1, 0);
    isLoading = requestCount > 0;
    notifyListeners();
    return response;
  },
  (error) => {
    requestCount = Math.max(requestCount - 1, 0);
    isLoading = requestCount > 0;
    errorMessage(error);
    notifyListeners();
    return Promise.reject(error);
  }
);

function errorMessage(error: any) {
  const detail = error?.response?.data?.detail;
  const msg = `Não foi possível processar a requisição. ${error?.message}. `;
  triggerAlert(`${detail ? detail : msg}`, 'error');
}

export const getApi = () => api;
