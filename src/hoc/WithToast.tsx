import { createContext, useEffect, useRef, useState } from 'react';
import { Alert, IToast } from 'components/shared/Alert/Alert';

interface IToastContextType {
  addToast: (toast: IToast) => void;
}

export const ToastContext = createContext<IToastContextType>(null!);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toastList, setToastList] = useState<Array<IToast>>([]);
  const timerRef = useRef<Array<NodeJS.Timeout>>([]);

  useEffect(() => {
    return () => {
      timerRef.current.map((timer) => {
        return clearTimeout(timer);
      });
    };
  }, []);

  const onDeleteToast = (id: number) => {
    setToastList((prev) => {
      return prev.filter((toast) => toast.id !== id);
    });
  };

  const addToast = (toast: IToast) => {
    const id = Math.floor(Math.random() * 1000 + 1);

    setToastList((prev) => {
      return [
        ...prev,
        {
          id,
          ...toast,
        },
      ];
    });
    const timeout = setTimeout(() => onDeleteToast(id), 3000);
    timerRef.current.push(timeout);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      <div className="relative">
        <div className="absolute flex flex-col items-center z-20 w-full top-4">
          {toastList.map((toast) => (
            <Alert key={toast.id} toast={toast} onDeleteToast={onDeleteToast} />
          ))}
        </div>
        {children}
      </div>
    </ToastContext.Provider>
  );
};
