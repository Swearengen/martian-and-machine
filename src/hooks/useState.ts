import { useContext } from 'react';
import { StateContext } from 'store/store';

export function useAuth() {
  return useContext(StateContext);
}
