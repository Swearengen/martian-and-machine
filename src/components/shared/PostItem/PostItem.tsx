import { FC, useState } from 'react';
import { Post as PostInstance } from 'store/models/post';
import { Link } from 'react-router-dom';
import { IComment } from 'interfaces/comment';
import { CommentItem } from '../CommentItem/CommentItem';
import useSWR from 'swr';
import { useFetcher } from 'hooks/useFetcher';

interface IPostProps {
  post: PostInstance;
  disableCollapse?: boolean;
  message: string;
}

export const PostItem: FC<IPostProps> = ({ post, disableCollapse, message }) => {
  console.log(`${message} PostItem`);
  const fetcher = useFetcher();
  const [isExpanded, setIsExpanded] = useState(disableCollapse);

  const { data: comments, error } = useSWR([isExpanded], () =>
    isExpanded ? fetcher(`/post/${post.id}/comments`) : null,
  );

  return (
    <div className="mb-8">
      <div className="relative p-6 border-solid border-2 border-gray-100 rounded-lg before:content-[''] before:w-1 before:h-full before:absolute before:top-0 before:left-0 before:bg-gray-300 hover:before:bg-martianRed">
        <Link to={`/post/${post.id}`}>
          <div className="mb-4">
            <p className="mb-4 text-gray-500">{post.user?.name}</p>
            <h3 className="mb-4 font-bold">{post.title}</h3>
            <p className="text-gray-600">{post.body}</p>
          </div>
        </Link>
        {isExpanded && !comments && !error && <div>Loading</div>}
        {isExpanded && comments && (
          <div className="mt-4">
            {comments?.map((comment: IComment) => (
              <CommentItem key={comment.id} comment={comment} message={message} />
            ))}
          </div>
        )}
        {!disableCollapse && (
          <button
            type="button"
            disabled={comments?.length === 0}
            className="text-martianRed hover:underline disabled:text-gray-600 disabled:cursor-not-allowed"
            onClick={() => setIsExpanded((prevValue) => !prevValue)}
          >
            {isExpanded ? 'hide comments' : 'show comments'}
          </button>
        )}
      </div>
    </div>
  );
};
