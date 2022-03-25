import { FC } from 'react';

interface ILoginProps {
  message: string;
}

export const Login: FC<ILoginProps> = ({ message }) => {
  console.log(`${message} Login`);

  return <div>login form</div>;
};
