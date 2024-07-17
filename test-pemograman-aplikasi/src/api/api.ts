import { UserDataInterface } from "@/interfaces/userDataInterface";
import { axiosInstance } from "@/lib/axiosInstance";

export const getUser = async () => {
  const response = await axiosInstance.get("/users");
  return response.data;
};

export const addUser = async (data: UserDataInterface) => {
  const response = await axiosInstance.post("/users", data);
  return response.data;
};

//!! For some reason json-server still using old data so it will always return 404
export const deleteUser = async (id: number) => {
  const response = await axiosInstance.delete(`/users/${id}`);
  return response.data;
};
