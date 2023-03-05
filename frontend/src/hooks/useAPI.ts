import axios, { AxiosRequestConfig } from 'axios';
import { useCallback } from 'react';

export function useAPI() {  
  const api = useCallback(async <T>(
    method: 'get' | 'post' | 'post' | 'patch' | 'delete',
    url: string,
    requestBody?: unknown,
  ): Promise<AxiosResponse<T>> => {
    const config: AxiosRequestConfig = {
      method,
      url: url,
    };
    if (requestBody) {
      config.data = requestBody;
    }
    return axios.request(config);
  }, []);

  return { api };
}
