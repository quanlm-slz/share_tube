const ShareCard: React.FC<{
  url: string;
  description: string;
  username: string;
}> = ({ url, description, username }) => {
  return (
    <div className="w-full h-64 flex gap-16 mx-5">
      <div className="w-auto h-auto my-auto">
        <iframe src={url} width={380} height={240} />
      </div>
      <div className="flex-grow h-60 my-auto mx-2 flex flex-col gap-2">
        <div className="font-bold text-xl">Movie Title</div>
        <div className="text-md">Shared by {username}</div>
        <div className="text-md">Description:</div>
        <div className="text-md flex-grow overflow-clip">{description}</div>
      </div>
    </div>
  );
};

export default ShareCard;
