import { IPost } from 'interfaces/post';
import { IUser } from 'interfaces/user';
import { Post } from './models/post';
import { User } from './models/user';

export interface IState {
  posts: Array<Post>;
  users: Array<User>;
}

export enum ActionType {
  AddUsers = 'addUsers',
  AddPosts = 'addPosts',
}

export const initialState: IState = {
  posts: [],
  users: [],
};

export const reducer = (state: IState, action: { type: ActionType; payload: any }) => {
  switch (action.type) {
    case ActionType.AddPosts:
      const posts = action.payload?.map((post: IPost) => {
        const postInstance = new Post({
          id: post.id,
          userId: post.userId,
          title: post.title,
          body: post.body,
        });
        const user = state.users.find((user) => user.id === postInstance.userId);
        user && postInstance.setUser(user);
        return postInstance;
      });

      return {
        ...state,
        posts,
      };

    case ActionType.AddUsers:
      const users = action.payload?.map(
        (user: IUser) => new User({ id: user.id, name: user.name }),
      );
      return {
        ...state,
        users,
      };

    default:
      return state;
  }
};
