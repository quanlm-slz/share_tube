import { getUserInfo } from "@/lib/user";
import { getCookie, setCookie, deleteCookie } from "cookies-next";
import {
  PropsWithChildren,
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type AuthContextType = {
  token: null | string;
  user: null | Record<any, any>;
  addToken: (token: string | null) => void;
  addUser: (user: Record<any, any>) => void;
  removeToken: () => void;
};
const AuthContext = createContext<AuthContextType | null>(null);
export const AuthContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [token, setToken] = useState<null | string>(null);
  const [user, setUser] = useState<null | Record<any, any>>(null);
  const [loading, setLoading] = useState(true);

  const addToken = (token: string | null) => {
    setToken(token);
    setCookie("token", token);
  };

  const removeToken = () => {
    deleteCookie("token");
    setToken(null);
  };

  const addUser = (user: Record<any, any>) => {
    const { token, ...userWithoutToken } = user;
    if (token) addToken(token);
    setUser(userWithoutToken);
  };

  const authCtx = {
    token,
    user,
    addToken,
    addUser,
    removeToken,
  };

  useEffect(() => {
    (async () => {
      const tmp = getCookie("token") || "";
      if ((token || tmp) && !user) {
        let data = null;
        try {
          data = await getUserInfo(token || tmp);
        } finally {
          const user = data?.data;
          if (user) {
            setToken(tmp);
            setUser(user);
          } else {
            removeToken();
          }
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    })();
  }, [token, user]);
  return (
    <AuthContext.Provider value={authCtx}>
      {!loading ? children : <div>Loading...</div>}
    </AuthContext.Provider>
  );
};

export default AuthContext;
