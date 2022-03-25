import React from 'react';

export const WithMessage =
  (Component: any) =>
  ({ ...props }) =>
    <Component {...props} message="hello from" />;
