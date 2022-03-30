import { useAuth } from 'hooks/useAuth';
import { useToast } from 'hooks/useToast';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface ILoginProps {
  message: string;
}

export const Login: FC<ILoginProps> = ({ message }) => {
  console.log(`${message} Login`);

  const { addToast } = useToast();
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: { email: string; password: string }) => {
    signIn(data.email, () => {
      navigate('/app');
      addToast({ message: 'Successful login', type: 'success' });
    });
  };

  return (
    <div className="container mx-auto px-4 flex h-screen justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-80 sm:w-96 p-4 h-min border-2 border-lightgray border-solid rounded"
      >
        <h2 className="text-xl mb-4">Login</h2>
        <label htmlFor="email" className="text-darkgray block mb-2">
          Email
        </label>
        <input
          type="text"
          {...register('email', {
            required: 'Field is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Please enter valid email',
            },
          })}
          className="form-input px-3 py-2 rounded w-full border-gray"
        />
        <p className="text-red text-sm my-2 h-5">{errors.email?.message}</p>
        <label htmlFor="password" className="text-darkgray block mb-2">
          Password
        </label>
        <input
          type="password"
          {...register('password', { required: 'Field is required' })}
          className="form-input px-3 py-2 rounded w-full border-gray"
        />
        <p className="text-red text-sm my-2 h-5">{errors.password?.message}</p>

        <button type="submit" className="bg-red hover:opacity-75 rounded text-white p-2">
          Submit
        </button>
      </form>
    </div>
  );
};
