// ** React Imports
import { conforms } from "lodash";
import { createContext, useEffect, useState, ReactNode } from "react";

export type ErrCallbackType = (err: { [key: string]: string }) => void;

export type AuthValuesType = {
  loading: boolean;
  logout: () => void;
  user: string | null;
  isAuthenticated: () => boolean;
  setLoading: (value: boolean) => void;
  setUser: (value: string | null) => void;
  login: (params: any, errorCallback?: ErrCallbackType) => void;
  register: (params: any, errorCallback?: ErrCallbackType) => void;
};

// ** Defaults
const defaultProvider: AuthValuesType = {
  user: null,
  loading: true,
  isAuthenticated: () => false,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  // ** States
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading);
  const [user, setUser] = useState<string | null>(defaultProvider.user);

  const handleLogin = async (params: any, errorCallback?: ErrCallbackType) => {
    //login
  };

  const handleLogout = () => {
    //logout
  };

  const handleRegister = (params: any, errorCallback?: ErrCallbackType) => {
    //register
  };

  const isAuthenticated = () => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) return true;

    return false;
  };
  const values = {
    user,
    loading,
    isAuthenticated,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout,
    register: handleRegister,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
