import { useCallback } from 'react';

import { useHttpClient } from './useHttpClient';
import { useHttpHeaders } from './useHttpHeaders';

export const useFetcher = () => {
  const httpHeaders = useHttpHeaders();
  const httpClient = useHttpClient();

  const fetcher = useCallback(
    (url: string) => {
      return httpClient
        .get(url, {
          headers: {
            ...httpHeaders,
          },
        })
        .then((res: any) => res.data);
    },
    [httpClient, httpHeaders],
  );

  return fetcher;
};
