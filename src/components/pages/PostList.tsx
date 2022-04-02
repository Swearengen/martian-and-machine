import { PostItem } from 'components/shared/PostItem/PostItem';
import { useFetcher } from 'hooks/useFetcher';
import { useStore } from 'hooks/useStore';
import { FC, useEffect, useMemo, useState } from 'react';
import { Post } from 'store/models/post';
import { ActionType } from 'store/store';
import useSWR from 'swr';

interface IPostListProps {
  message: string;
}

export const PostList: FC<IPostListProps> = ({ message }) => {
  console.log(`${message} PostList`);
  const [searchValue, setSearchValue] = useState('');
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

  const filteredPosts = useMemo(
    () =>
      store.posts.filter((post: Post) =>
        post.user?.name?.toLowerCase().includes(searchValue.trim()),
      ),
    [searchValue, store.posts],
  );

  return (
    <main className="container mt-10 px-4">
      <div className="flex mb-4 items-center justify-between">
        <h1 className="font-bold text-xl text-left">Posts</h1>
        <input
          value={searchValue}
          type="text"
          className="form-input grow-0 shrink basis-0 px-3 py-2 rounded border-gray-200 text-left w-72"
          placeholder="search authors"
          onChange={(event: any) => setSearchValue(event.target.value)}
        />
      </div>
      {!postsResponse && !postsError ? (
        <div>Loading</div>
      ) : (
        <>
          {filteredPosts.map((post: Post) => (
            <PostItem key={post.id} post={post} message={message} />
          ))}
        </>
      )}
    </main>
  );
};
