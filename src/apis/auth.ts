import { axiosInstance } from "@/libs";
import { LoginReqTypes } from "@/types";

export const login = async (data: LoginReqTypes) => {
  const response = await axiosInstance.post("/auth/signIn", data);

  return response.data;
};
