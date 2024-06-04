const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export type Share = {
  id: string;
  url: string;
  username: string;
  description: string;
};

export type ShareParams = {
  url: string;
  description: string;
};

export const getSharesRequest = async () => {
  const response = await fetch(`${BACKEND_URL}/shares`);

  const json_response = await response.json();
  if (!response.ok) throw json_response;
  return json_response;
};

export const createSharesRequest = async (
  token: string,
  body: { share: ShareParams }
) => {
  const response = await fetch(`${BACKEND_URL}/shares`, {
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    method: "POST",
  });

  const json_response = await response.json();
  if (!response.ok) throw json_response;
  return json_response;
};
