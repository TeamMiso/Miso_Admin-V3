import { axiosInstance } from "@/libs";
import { LoginReqTypes, RoleTypes } from "@/types";
import { AxiosResponse } from "axios";

export const login = async (data: LoginReqTypes) => {
  const loginRes = await axiosInstance.post("/auth/signIn", data);

  const roleRes: AxiosResponse<RoleTypes> = await axiosInstance.get("/user", {
    headers: {
      Authorization: `Bearer ${loginRes.data.accessToken}`,
    },
  });

  return loginRes.data;
};
