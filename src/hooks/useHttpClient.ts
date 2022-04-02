import React from 'react';

import { HttpClientContext } from 'providers/HttpClientProvider';

export function useHttpClient() {
  return React.useContext(HttpClientContext);
}
