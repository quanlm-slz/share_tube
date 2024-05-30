import { useContext, useState } from "react";
import AuthContext from "./AuthContext";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

const Header: React.FC = () => {
  const authContext = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const { token, email, addToken, removeToken, addEmail, removeEmail } =
    authContext!;

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/user/sign_in", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          user: {
            email,
            password,
          },
        }),
      });
      const data = await response.json();
      addToken(data?.data?.token);
      addEmail(data?.data?.email);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    try {
      await fetch("http://localhost:3000/user/sign_out", {
        headers: {
          "Content-Type": "application/json",
          Authorization: token || "",
        },
        method: "DELETE",
      });
      removeToken();
      removeEmail();
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-auto h-16 sticky flex mx-8 justify-between">
      <h1 className="text-3xl font-bold my-auto">FUNNY MOVIES</h1>
      {!loading &&
        (token ? (
          <SignOut submit={signOut} email={email} />
        ) : (
          <SignIn submit={signIn} />
        ))}
    </div>
  );
};

export default Header;
