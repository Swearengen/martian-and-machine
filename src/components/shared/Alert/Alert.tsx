import classnames from 'classnames';
import { FC } from 'react';
import { MdClose } from 'react-icons/md';

export type ToastType = 'success' | 'error' | 'warning';

export interface IToast {
  message: string;
  type: ToastType;
  id?: number;
}

interface IAlertProps {
  toast: IToast;
  onDeleteToast: (id: number) => void;
}

export const Alert: FC<IAlertProps> = ({ toast, onDeleteToast }) => (
  <div
    className={`${classnames({
      'bg-emerald-300': toast.type === 'success',
      'bg-martianRed': toast.type === 'error',
      'bg-orange-300': toast.type === 'warning',
    })} p-2 w-72 sm:w-80 mb-4 flex items-center justify-between`}
  >
    <p className="flex-1">{toast.message}</p>
    <button
      type="button"
      className="shrink text-slate-500 hover:text-slate-900"
      onClick={() => onDeleteToast(toast.id as number)}
    >
      <MdClose />
    </button>
  </div>
);
