import { axiosInstance } from "@/libs";

export const login = async (data: { email: string; password: string }) => {
  const response = await axiosInstance.post("/auth/signIn", data);

  return response.data;
};
