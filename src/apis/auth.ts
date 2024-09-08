import { axiosInstance } from "@/libs";
import { LoginReqTypes, RoleTypes } from "@/types";

export const login = async (data: LoginReqTypes) => {
  const loginRes = await axiosInstance.post("/auth/signIn", data);

  const roleRes: RoleTypes = await axiosInstance.get("/user", {
    headers: {
      Authorization: `Bearer ${loginRes.data.accessToken}`,
    },
  });

  if (roleRes.role === "ROLE_AMDIN") {
    return loginRes.data;
  }
};
