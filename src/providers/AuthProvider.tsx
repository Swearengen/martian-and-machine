import { createContext, useState } from 'react';
import { IUser } from 'interfaces/auth';
import Cookies from 'js-cookie';
import { ACCESS_TOKEN } from 'constants/accessToken';
import { UserCookieKeys } from 'enums/userCookieKeys';

interface AuthContextType {
  user: IUser | null;
  signIn: (email: string, callback: VoidFunction) => void;
  signOut: (callback: VoidFunction) => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(() =>
    Cookies.get(UserCookieKeys.Email)
      ? {
          email: Cookies.get(UserCookieKeys.Email) as string,
          token: Cookies.get(UserCookieKeys.Token),
        }
      : null,
  );

  const storeUser = (user: IUser) => {
    setUser(user);
    Cookies.set(UserCookieKeys.Token, user.token as string);
    Cookies.set(UserCookieKeys.Email, user.email as string);
  };

  const signIn = (email: string, callback: VoidFunction) => {
    // usually this is where I would do api call to authenticate user and retrive token
    storeUser({ email: email, token: ACCESS_TOKEN });
    callback();
  };

  const signOut = (callback: VoidFunction) => {
    Cookies.remove(UserCookieKeys.Email);
    Cookies.remove(UserCookieKeys.Token);
    setUser(null);
    callback();
  };

  return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>;
};
