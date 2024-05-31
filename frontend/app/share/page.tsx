"use client";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../_components/AuthContext";
import PageLayout from "../_components/PageLayout";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { ShareParams, createSharesRequest } from "@/lib/share";

const SharePage: React.FC = () => {
  const { token } = useContext(AuthContext) || {};
  const router = useRouter();
  const { register, handleSubmit } = useForm<ShareParams>();
  const [error, setError] = useState<string | null>();
  const onSubmit: SubmitHandler<ShareParams> = async (data) => {
    try {
      await createSharesRequest(token || "", { share: data });
      router.push("/");
    } catch {
      setError("Something went wrong");
    }
  };

  useEffect(() => {
    if (!token) router.push("/");
  }, [token, router]);
  return (
    <PageLayout>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full px-16 flex-col flex gap-5 my-12"
      >
        <div className="text-xl font-bold">Create new share</div>
        <div className="flex gap-5">
          <label htmlFor="url" className="w-36">
            Url
          </label>
          <input
            {...register("url")}
            className="border border-black flex-grow"
          />
        </div>
        <div className="flex gap-5">
          <label htmlFor="description" className="w-36">
            Description
          </label>
          <textarea
            {...register("description")}
            className="border border-black flex-grow"
            rows={3}
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

export default SharePage;
