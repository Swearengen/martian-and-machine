import { PostItem } from 'components/shared/PostItem/PostItem';
import { useStore } from 'hooks/useStore';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Post } from 'store/models/post';
import { Link } from 'react-router-dom';

interface IPostDetailsProps {
  message: string;
}

export const PostDetails: FC<IPostDetailsProps> = ({ message }) => {
  console.log(`${message} PostDetails`);

  const params = useParams();
  const [state] = useStore() as Array<any>;

  const currentPost = state.posts.find((post: Post) => post.id === params.id);

  return (
    <main className="container mt-10 px-4">
      <div className="mb-4 ml-4">
        <h1 className="mb-4 font-bold text-xl text-center">Post details</h1>
        <Link to="/app">
          <span className="text-martianRed hover:underline">Back</span>
        </Link>
      </div>
      {currentPost && <PostItem post={currentPost} disableCollapse={true} />}
    </main>
  );
};
