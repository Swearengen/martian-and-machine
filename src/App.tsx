import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './components/pages/Login';
import { PostDetails } from './components/pages/PostDetails';
import { PostList } from './components/pages/PostList';
import { WithMessage } from './hoc/WithMessage';

interface IAppProps {
  message: string;
}

const App: FC<IAppProps> = ({ message }) => {
  console.log(`${message} App`);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login message={message} />} />
        <Route path="app" element={<PostList message={message} />} />
        <Route path="post/:id" element={<PostDetails message={message} />} />
        <Route path="*" element={<Navigate to="app" />} />
      </Routes>
    </div>
  );
};

export default WithMessage(App);
