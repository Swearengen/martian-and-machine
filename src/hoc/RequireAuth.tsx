import { useLocation, Navigate } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';

interface IRequireAuth {
  children: JSX.Element;
  message: string;
}

export const RequireAuth = ({ children, message }: IRequireAuth) => {
  console.log(`${message} RequireAuth`);
  let auth = useAuth();
  let location = useLocation();

  if (!auth?.user) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};
