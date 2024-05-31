import { useRouter } from "next/navigation";
import { useState } from "react";

const SignIn: React.FC<{ submit: (email: string, password: string) => {} }> = ({
  submit,
}) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex gap-4 h-6 my-auto">
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        className="h-auto w-36 border border-stone-500 px-2"
      ></input>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        className="h-auto w-36 border border-stone-500 px-2"
      ></input>
      <button
        className="bg-stone-200 shadow-sm rounded-md border border-stone-700 px-6 py-auto hover:bg-stone-400"
        onClick={() => submit(email, password)}
      >
        Login
      </button>
      <button
        className="bg-stone-200 shadow-sm rounded-md border border-stone-700 px-6 py-auto hover:bg-stone-400"
        onClick={() => router.push("/register")}
      >
        Register
      </button>
    </div>
  );
};

export default SignIn;
