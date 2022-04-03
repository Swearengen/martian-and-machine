import { render, screen } from '@testing-library/react';
import { useFetcher } from 'hooks/useFetcher';
import { BrowserRouter } from 'react-router-dom';
import useSWR from 'swr';
import { PostDetails } from './PostDetails';

jest.mock('swr');

jest.mock('hooks/useFetcher');
(useFetcher as jest.Mock).mockReturnValue(jest.fn());

jest.mock('components/shared/PostItem/PostItem', () => ({
  PostItem: () => <div data-testid="post-item" />,
}));

describe('PostDetails', () => {
  it('should display loading state', () => {
    (useSWR as jest.Mock).mockReturnValue({
      data: undefined,
      error: undefined,
    });

    render(
      <BrowserRouter>
        <PostDetails message="hello message" />
      </BrowserRouter>,
    );
    expect(screen.getByText('Post details')).toBeDefined();
    expect(screen.getByText('Loading')).toBeDefined();
  });

  it('should display post item', () => {
    (useSWR as jest.Mock).mockReturnValue({
      data: [],
      error: undefined,
    });

    render(
      <BrowserRouter>
        <PostDetails message="hello message" />
      </BrowserRouter>,
    );

    expect(screen.getByTestId('post-item')).toBeDefined();
  });
});
