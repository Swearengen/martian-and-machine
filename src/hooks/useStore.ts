import { useContext } from 'react';
import { StateContext } from 'store/store';

export function useStore() {
  return useContext(StateContext);
}
