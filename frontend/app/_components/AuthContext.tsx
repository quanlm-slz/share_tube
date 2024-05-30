import { PropsWithChildren, createContext, useState } from "react";

type AuthContextType = {
  token: null | String;
  addToken: (token: String | null) => void;
  removeToken: () => void;
};
const AuthContext = createContext<AuthContextType | null>(null);
export const AuthContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [token, setToken] = useState<null | String>(null);

  const addToken = (token: String | null) => {
    setToken(token);
  };

  const removeToken = () => {
    setToken(null);
  };

  const authCtx = {
    token,
    addToken,
    removeToken,
  };
  return (
    <AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
