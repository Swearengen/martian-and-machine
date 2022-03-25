import { FC } from 'react';

interface IPostListProps {
  message: string;
}

export const PostList: FC<IPostListProps> = ({ message }) => {
  console.log(`${message} PostList`);

  return <div>list of posts</div>;
};
