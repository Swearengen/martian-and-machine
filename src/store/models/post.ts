import { User } from './user';

export class Post {
  static readonly type = 'posts';
  id: string;
  userId: string;
  title: string;
  body: string;
  user?: User;

  constructor({
    id,
    userId,
    title,
    body,
  }: {
    id: string;
    userId: string;
    title: string;
    body: string;
  }) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.body = body;
  }

  setUser(user: User) {
    this.user = user;
  }
}
