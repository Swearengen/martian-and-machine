import axios, { AxiosInstance } from 'axios';
import { createContext, ReactNode } from 'react';

export const HttpClientContext = createContext<AxiosInstance>(null!);

export const HttpClientProvider = ({ children }: { children: ReactNode }) => {
  const httpClient = axios.create({
    baseURL: 'https://demo.martian.services/api',
  });

  return <HttpClientContext.Provider value={httpClient}>{children}</HttpClientContext.Provider>;
};
