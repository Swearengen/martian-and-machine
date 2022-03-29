import { createContext, ReactNode, useReducer } from 'react';
import { Post } from './models/post';
import { User } from './models/user';

interface IState {
  posts: Array<Post>;
  users: Array<User>;
}

enum ActionType {
  AddUsers = 'addUsers',
  AddPosts = 'addPosts',
}

const initialState: IState = {
  posts: [],
  users: [],
};

function reducer(state: IState, action: { type: ActionType; payload: any }) {
  switch (action.type) {
    case ActionType.AddPosts:
      const posts = action.payload.map((post: Post) => {
        const postInstance = new Post({
          id: post.id,
          userId: post.userId,
          title: post.title,
          body: post.body,
        });
        const user = state.users.find((user) => user.id === postInstance.id);
        user && postInstance.setUser(user);
        return postInstance;
      });

      return {
        ...state,
        posts,
      };

    case ActionType.AddUsers:
      const users = action.payload.map((user: User) => new User({ id: user.id, name: user.name }));
      return {
        ...state,
        users,
      };

    default:
      return state;
  }
}

export const StateContext = createContext({});

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const state = useReducer(reducer, initialState);

  return <StateContext.Provider value={state}>{children}</StateContext.Provider>;
};
