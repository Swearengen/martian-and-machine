import { PostItem } from 'components/shared/PostItem/PostItem';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useFetcher } from 'hooks/useFetcher';
import useSWR from 'swr';

interface IPostDetailsProps {
  message: string;
}

export const PostDetails: FC<IPostDetailsProps> = ({ message }) => {
  console.log(`${message} PostDetails`);
  const fetcher = useFetcher();
  const params = useParams();

  const { data: post, error } = useSWR(`/posts/${params.id}`, fetcher);

  return (
    <main className="container mt-10 px-4">
      <div className="mb-4 ml-4">
        <h1 className="mb-4 font-bold text-xl text-center">Post details</h1>
        <Link to="/app">
          <span className="text-martianRed hover:underline">Back</span>
        </Link>
      </div>
      {!post && !error ? (
        <div>Loading</div>
      ) : (
        <PostItem post={post} disableCollapse={true} message={message} />
      )}
    </main>
  );
};
