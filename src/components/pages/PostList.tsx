import { PostItem } from 'components/shared/PostItem/PostItem';
import { useFetcher } from 'hooks/useFetcher';
import { useStore } from 'hooks/useStore';
import { FC, useEffect } from 'react';
import { Post } from 'store/models/post';
import { ActionType } from 'store/store';
import useSWR from 'swr';

interface IPostListProps {
  message: string;
}

export const PostList: FC<IPostListProps> = ({ message }) => {
  console.log(`${message} PostList`);
  const [store, dispatch] = useStore() as Array<any>;
  const fetcher = useFetcher();

  const { data: usersResponse } = useSWR('/users', fetcher);
  const { data: postsResponse, error: postsError } = useSWR([usersResponse], () =>
    usersResponse ? fetcher('/posts') : null,
  );

  useEffect(() => {
    if (usersResponse) {
      dispatch({ type: ActionType.AddUsers, payload: usersResponse });
    }
  }, [dispatch, usersResponse]);

  useEffect(() => {
    if (postsResponse) {
      dispatch({ type: ActionType.AddPosts, payload: postsResponse });
    }
  }, [dispatch, postsResponse]);

  return (
    <main className="container mt-10 px-4">
      <h1 className="mb-4 font-bold text-xl text-center">Posts</h1>
      {!postsResponse && !postsError ? (
        <div>Loading</div>
      ) : (
        <>
          {store.posts.map((post: Post) => (
            <PostItem key={post.id} post={post} message={message} />
          ))}
        </>
      )}
    </main>
  );
};
