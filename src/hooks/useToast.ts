import { useContext } from 'react';
import { ToastContext } from 'hoc/WithToast';

export function useToast() {
  return useContext(ToastContext);
}
