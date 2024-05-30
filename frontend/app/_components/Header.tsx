import { useContext, useState } from "react";
import AuthContext from "./AuthContext";
import SignIn from "./SignIn";

const Header: React.FC = () => {
  const authContext = useContext(AuthContext);
  const token = authContext!.token;
  const setToken = authContext!.addToken;
  const [loading, setLoading] = useState(false);
  const signIn = async (email: String, password: String) => {
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
      setToken(data?.data?.token);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-auto h-16 sticky flex mx-8 justify-between">
      <h1 className="text-3xl font-bold my-auto">FUNNY MOVIES</h1>
      {!token && !loading && <SignIn submit={signIn} />}
    </div>
  );
};

export default Header;
