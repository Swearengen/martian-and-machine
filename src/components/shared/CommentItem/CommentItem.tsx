import { IComment } from 'interfaces/comment';
import { FC } from 'react';

interface ICommentItemProps {
  comment: IComment;
}

export const CommentItem: FC<ICommentItemProps> = ({ comment }) => {
  return (
    <div className="mb-2 p-2 bg-blue-50 rounded-md">
      <p className="text-gray-700 mb-2">{comment.email}</p>
      <p className="text-gray-700">{comment.body}</p>
    </div>
  );
};
