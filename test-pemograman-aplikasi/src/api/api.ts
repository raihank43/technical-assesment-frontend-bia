import { UserDataInterface } from "@/interfaces/userDataInterface";

const baseUrl = "http://localhost:3000";

export const getUser = async () => {
  const response = await fetch(`${baseUrl}/users`);
  return response.json();
};

export const addUser = async (data: UserDataInterface) => {
  const response = await fetch(`${baseUrl}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
