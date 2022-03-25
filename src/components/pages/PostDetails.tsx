import { FC } from 'react';

interface IPostDetailsProps {
  message: string;
}

export const PostDetails: FC<IPostDetailsProps> = ({ message }) => {
  console.log(`${message} PostDetails`);

  return <div>post details page</div>;
};
