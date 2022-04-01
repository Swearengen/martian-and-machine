import { FC, useState } from 'react';
import { Post as PostInstance } from 'store/models/post';
import { Link } from 'react-router-dom';
import { IComment } from 'interfaces/comment';
import { CommentItem } from '../CommentItem/CommentItem';

interface IPostProps {
  post: PostInstance;
  disableCollapse?: boolean;
}

const comments = [
  {
    postId: '1',
    id: '1',
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
  },
  {
    postId: '1',
    id: '2',
    name: 'quo vero reiciendis velit similique earum',
    email: 'Jayne_Kuhic@sydney.com',
    body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
  },
  {
    postId: '1',
    id: '3',
    name: 'odio adipisci rerum aut animi',
    email: 'Nikita@garfield.biz',
    body: 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione',
  },
  {
    postId: '1',
    id: '4',
    name: 'alias odio sit',
    email: 'Lew@alysha.tv',
    body: 'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati',
  },
  {
    postId: '1',
    id: '5',
    name: 'vero eaque aliquid doloribus et culpa',
    email: 'Hayden@althea.biz',
    body: 'harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et',
  },
] as Array<IComment>;

export const PostItem: FC<IPostProps> = ({ post, disableCollapse }) => {
  const [isExpanded, setIsExpanded] = useState(disableCollapse);

  // fetch commets sa swr-om /post/id/comments

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
        {isExpanded && (
          <div className="mt-4">
            {comments.map((comment: IComment) => (
              <CommentItem key={comment.id} comment={comment} />
            ))}
          </div>
        )}
        {!disableCollapse && (
          <button
            type="button"
            disabled={comments.length === 0}
            className="text-martianRed hover:underline disabled:text-gray-600 disabled:cursor-not-allowed"
            onClick={() => setIsExpanded((prevValue) => !prevValue)}
          >
            {isExpanded ? 'hide comments' : `show comments (${comments.length})`}
          </button>
        )}
      </div>
    </div>
  );
};
