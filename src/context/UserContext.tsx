/* eslint-disable camelcase */
import { createContext, ReactNode, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api';

interface User {
  username: string;
  email: string;
}

interface UserContextData {
  user?: User;
  getLocalUser: () => User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

type LoginResponseData = {
  access_token: string;
  refresh_token: string;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<UserContextData>(
  {} as UserContextData,
);

export function logout() {
  AsyncStorage.removeItem('@brothersinvest:accessToken');
  AsyncStorage.removeItem('@brothersinvest:refreshToken');
  AsyncStorage.removeItem('@brothersinvest:user');

  // eslint-disable-next-line no-restricted-globals
  location.reload();
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>();

  async function getUser(email: string) {
    const response = await api.get<User>('/user/auth', {
      params: { email },
    });

    const { username } = response.data;

    const loggedUser = { username, email };
    setUser(loggedUser);
    AsyncStorage.setItem('@brothersinvest:username', loggedUser.username);
    AsyncStorage.setItem('@brothersinvest:email', loggedUser.email);
  }

  async function login(email: string, password: string) {
    const requestData = new FormData();
    requestData.append('grant_type', 'password');
    requestData.append('username', email);
    requestData.append('password', password);

    const response = await api.post<LoginResponseData>(
      'oauth/token',
      requestData,
      {
        auth: {
          username: 'brothers-invest-api',
          password: 'bi-password-123',
        },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      },
    );

    const {
      access_token: accessToken,
      refresh_token: refreshToken,
    } = response.data;

    await AsyncStorage.setItem('@brothersinvest:accessToken', accessToken);
    await AsyncStorage.setItem('@brothersinvest:refreshToken', refreshToken);

    api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    getUser(email);
  }

  function handleLogout() {
    logout();
    setUser(undefined);
  }

  function getLocalUser() {
    let username = null;
    AsyncStorage.getItem('@brothersinvest:username').then(x => username = x);

    let email = null;
    AsyncStorage.getItem('@brothersinvest:email').then(x => email = x);
    
    if (!username || !email) return null;
    return { username: String(username), email: String(email) };
  }

  useEffect(() => {
    const localUser = getLocalUser();
    if (localUser) setUser(localUser);

    const accessToken = AsyncStorage.getItem('@brothersinvest:accessToken');
    api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }, []);

  return (
    <UserContext.Provider
      value={{ user, getLocalUser, login, logout: handleLogout }}
    >
      {children}
    </UserContext.Provider>
  );
}
