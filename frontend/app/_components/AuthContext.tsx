import { PropsWithChildren, createContext, useState } from "react";

type AuthContextType = {
  email: null | string;
  token: null | string;
  addToken: (token: string | null) => void;
  addEmail: (email: string | null) => void;
  removeToken: () => void;
  removeEmail: () => void;
};
const AuthContext = createContext<AuthContextType | null>(null);
export const AuthContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [token, setToken] = useState<null | string>(null);
  const [email, setEmail] = useState<null | string>(null);

  const addToken = (token: string | null) => {
    setToken(token);
  };

  const removeToken = () => {
    setToken(null);
  };

  const addEmail = (email: string | null) => {
    setEmail(email);
  };

  const removeEmail = () => {
    setEmail(null);
  };

  const authCtx = {
    token,
    email,
    addToken,
    addEmail,
    removeToken,
    removeEmail,
  };
  return (
    <AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
