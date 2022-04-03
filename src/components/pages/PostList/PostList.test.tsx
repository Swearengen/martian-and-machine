import { PostList } from './PostList';
import { useReducer } from 'react';
import { useFetcher } from 'hooks/useFetcher';
import useSWR from 'swr';
import { render, screen } from '@testing-library/react';
import { Post } from 'store/models/post';
import { User } from 'store/models/user';
import userEvent from '@testing-library/user-event';

jest.mock('react', () => {
  const originalImplementation = jest.requireActual('react');

  return {
    ...originalImplementation,
    useReducer: jest.fn(),
  };
});

jest.mock('swr');

jest.mock('hooks/useFetcher');
(useFetcher as jest.Mock).mockReturnValue(jest.fn());

jest.mock('components/shared/PostItem/PostItem', () => ({
  PostItem: () => <div data-testid="post-item" />,
}));

describe('PostList', () => {
  it('should render loading state', () => {
    (useReducer as jest.Mock).mockReturnValue([
      {
        posts: [],
        users: [],
      },
      jest.fn(),
    ]);

    (useSWR as jest.Mock).mockReturnValue({ data: undefined, error: undefined });

    render(<PostList message="hello message" />);

    expect(PostList).toBeDefined();
    expect(screen.getByText('Posts')).toBeDefined();
    expect(screen.getByText('Loading')).toBeDefined();
  });

  describe('store has some posts', () => {
    beforeEach(() => {
      const post1 = new Post({ id: '1', userId: '1', body: 'body', title: 'title' });
      const user1 = new User({ id: '1', name: 'first' });
      post1.setUser(user1);

      const post2 = new Post({ id: '2', userId: '2', body: 'body', title: 'title' });
      const user2 = new User({ id: '2', name: 'second' });
      post2.setUser(user2);

      (useReducer as jest.Mock).mockReturnValue([
        {
          posts: [post1, post2],
          users: [user1, user2],
        },
        jest.fn(),
      ]);
      (useSWR as jest.Mock).mockReturnValue({ data: [], error: undefined });
    });

    it('should render all post items', () => {
      render(<PostList message="hello message" />);
      expect(screen.getAllByTestId('post-item').length).toBe(2);
    });

    it('should render filtered post items', async () => {
      const user = userEvent.setup();
      render(<PostList message="hello message" />);
      const input = screen.getByPlaceholderText('search authors');

      input.focus();
      await user.keyboard('first');
      expect(input).toHaveValue('first');

      expect(screen.getAllByTestId('post-item').length).toBe(1);
    });
  });
});
