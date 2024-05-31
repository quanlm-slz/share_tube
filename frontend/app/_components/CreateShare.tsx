import Link from "next/link";

const CreateShare: React.FC = () => {
  return (
    <Link
      className="bg-stone-200 shadow-sm rounded-md border border-stone-700 px-6 py-auto hover:bg-stone-400"
      href="/share"
    >
      Create a share
    </Link>
  );
};

export default CreateShare;
