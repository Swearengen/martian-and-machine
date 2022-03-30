import { RequireAuth } from 'hoc/RequireAuth';
import { useAuth } from 'hooks/useAuth';
import { useToast } from 'hooks/useToast';
import { FC } from 'react';

interface IAppLayoutProps {
  message: string;
}

export const AppLayout: FC<IAppLayoutProps> = ({ children, message }) => {
  console.log(`${message} AppLayout`);

  const { signOut } = useAuth();
  const { addToast } = useToast();

  const onSignOut = () => {
    signOut(() => {
      addToast({ message: 'You are loged out', type: 'success' });
    });
  };

  return (
    <RequireAuth message={message}>
      <div>
        <div className="text-right mb-6">
          <button
            type="button"
            className="px-4 py-2 text-blue-600 hover:underline"
            onClick={() => onSignOut()}
          >
            Log out
          </button>
        </div>
        {children}
      </div>
    </RequireAuth>
  );
};
