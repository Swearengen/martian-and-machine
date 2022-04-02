import { useAuth } from './useAuth';

export const useHttpHeaders = () => {
  const { user } = useAuth();
  return {
    'X-Auth': user?.token as string,
  };
};
