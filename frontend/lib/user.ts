const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export type UserParams = {
  username: string;
  email: string;
  password: string;
};

export const signInRequest = async (email: string, password: string) => {
  const response = await fetch(`${BACKEND_URL}/user/sign_in`, {
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

  const json_response = await response.json();
  if (!response.ok) throw json_response;
  return json_response;
};

export const signOutRequest = async (token: string) => {
  await fetch(`${BACKEND_URL}/user/sign_out`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token || "",
    },
    method: "DELETE",
  });
};

export const getUserInfo = async (token: string) => {
  const response = await fetch(`${BACKEND_URL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token || "",
    },
    method: "POST",
  });

  const json_response = await response.json();
  if (!response.ok) throw json_response;
  return json_response;
};

export const signUpRequest = async (body: { user: UserParams }) => {
  const response = await fetch(`${BACKEND_URL}/user/sign_up`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  });

  const json_response = await response.json();
  if (!response.ok) throw json_response;
  else return json_response;
};
