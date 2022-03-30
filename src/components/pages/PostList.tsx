import { useStore } from 'hooks/useStore';
import { FC, useEffect } from 'react';
import { ActionType, IState } from 'store/store';

interface IPostListProps {
  message: string;
}

const users = [
  {
    id: '1',
    name: 'Leanne Graham',
  },
  {
    id: '2',
    name: 'Ervin Howell',
  },
];

const posts = [
  {
    id: '1',
    userId: '1',
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    id: '2',
    userId: '1',
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
  },
];

export const PostList: FC<IPostListProps> = ({ message }) => {
  console.log(`${message} PostList`);
  const [store, dispatch] = useStore() as Array<any>;

  useEffect(() => {
    dispatch({ type: ActionType.AddUsers, payload: users });
    dispatch({ type: ActionType.AddPosts, payload: posts });
  }, [dispatch]);

  console.log(store);

  return <div>list of posts</div>;
};
