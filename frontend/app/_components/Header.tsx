import { useContext, useState } from "react";
import AuthContext from "./AuthContext";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import { signInRequest, signOutRequest } from "@/lib/user";
import Notification from "./Notification";

const Header: React.FC = () => {
  const authContext = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const { token, user, removeToken, addUser } = authContext!;

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      const data = await signInRequest(email, password);
      addUser(data?.data);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    try {
      await signOutRequest(token || "");
      removeToken();
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-auto h-16 sticky flex mx-8 justify-between">
      <h1 className="text-3xl font-bold my-auto">FUNNY MOVIES</h1>
      <div className="flex gap-5">
        {!loading &&
          (token ? (
            <SignOut submit={signOut} email={user?.email} />
          ) : (
            <SignIn submit={signIn} />
          ))}
        <Notification />
      </div>
    </div>
  );
};

export default Header;
