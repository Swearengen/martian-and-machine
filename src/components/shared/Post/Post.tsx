import { FC } from 'react';
import { Post as PostInstance } from 'store/models/post';
import { Link } from 'react-router-dom';

interface IPostProps {
  post: PostInstance;
}

export const Post: FC<IPostProps> = ({ post }) => {
  return (
    <div className="mb-8">
      <Link to={`/post/${post.id}`}>
        <div className="relative p-6 border-solid border-2 border-gray-100 rounded-lg before:content-[''] before:w-1 before:h-full before:absolute before:top-0 before:left-0 before:bg-gray-300 hover:before:bg-blue-400">
          <p className="mb-4 text-gray-500">{post.user?.name}</p>
          <h3 className="mb-4 font-bold">{post.title}</h3>
          <p className="text-gray-600">{post.body}</p>
        </div>
      </Link>
    </div>
  );
};
