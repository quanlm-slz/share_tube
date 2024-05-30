const SignOut: React.FC<{ email: string | null; submit: () => {} }> = ({
  email,
  submit,
}) => {
  return (
    <div className="flex gap-4 h-6 my-auto">
      <div>Welcome {email}</div>
      <button
        className="bg-stone-200 shadow-sm rounded-md border border-stone-700 px-6 py-auto hover:bg-stone-400"
        onClick={submit}
      >
        Logout
      </button>
    </div>
  );
};

export default SignOut;
