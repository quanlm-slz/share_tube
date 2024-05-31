import { Share, getSharesRequest } from "@/lib/share";
import ShareCard from "./ShareCard";
import { useEffect, useState } from "react";

const ShareList: React.FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const responseBody = await getSharesRequest();
      setData(responseBody.data.items);
      setLoading(false);
    })();
  }, [setData, setLoading]);
  return loading ? (
    "loading..."
  ) : (
    <div className="w-[900px] flex-grow flex flex-col gap-5 mx-auto py-4">
      <div className="text-3xl font-bold">Shared videos</div>
      {data.map((share: Share, index) => (
        <ShareCard key={index} {...share} />
      ))}
    </div>
  );
};

export default ShareList;
