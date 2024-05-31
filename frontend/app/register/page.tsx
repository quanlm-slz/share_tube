"use client";
import { useContext, useState } from "react";
import PageLayout from "../_components/PageLayout";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserParams, signUpRequest } from "@/lib/user";
import { useRouter } from "next/navigation";
import AuthContext from "../_components/AuthContext";

const RegisterPage: React.FC = () => {
  const { register, handleSubmit } = useForm<UserParams>();
  const [error, setError] = useState<string | null>();
  const { addUser } = useContext(AuthContext) || {};
  const router = useRouter();
  const onSubmit: SubmitHandler<UserParams> = async (data) => {
    try {
      const response = await signUpRequest({ user: data });
      addUser!(response!.data || {});
      router.push("/");
    } catch {
      setError("Something went wrong");
    }
  };
  return (
    <PageLayout>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full px-16 flex-col flex gap-5 my-12"
      >
        <div className="text-xl font-bold">Create new user</div>
        <div className="flex gap-5">
          <label htmlFor="url" className="w-36">
            Username
          </label>
          <input
            {...register("username")}
            className="border border-black flex-grow"
          />
        </div>
        <div className="flex gap-5">
          <label htmlFor="url" className="w-36">
            Email
          </label>
          <input
            {...register("email")}
            className="border border-black flex-grow"
          />
        </div>
        <div className="flex gap-5">
          <label htmlFor="url" className="w-36">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            className="border border-black flex-grow"
          />
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <div className="flex gap-5 justify-end">
          <button
            type="submit"
            className="rounded-sm px-5 py-1 bg-slate-200 hover:bg-slate-300"
          >
            Submit
          </button>
          <button
            type="reset"
            className="rounded-sm px-5 py-1 bg-slate-200 hover:bg-slate-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </PageLayout>
  );
};

export default RegisterPage;
