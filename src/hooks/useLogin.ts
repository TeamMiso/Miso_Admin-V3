import { useMutation } from "@tanstack/react-query";
import { login } from "@/apis";
import { useToast } from "@/components/ui";
import { useRouter } from "next/navigation";
import { LoginReqTypes, LoginResTypes } from "@/types";
import { AxiosError } from "axios";

export const useLogin = () => {
  const { toast } = useToast();
  const { push } = useRouter();

  const setErrorTextByStatusCode = (statusCode: number) => {
    switch (statusCode) {
      case 400:
        return "비밀번호가 일치하지 않습니다.";
      case 403:
        return "이메일이 인증되지 않았습니다.";
      case 404:
        return "사용자를 찾을 수 없거나 역할(Role)이 존재하지 않습니다.";
      case 500:
        return "서버 오류가 발생했습니다.";
      default:
        return "알 수 없는 오류가 발생했습니다.";
    }
  };

  return useMutation<LoginResTypes, AxiosError, LoginReqTypes>({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", "Bearer " + data.refreshToken);
      push("/");
      toast({
        title: "로그인에 성공하셨습니다.",
      });
    },
    onError: (error) => {
      const statusCode = error.response?.status;
      const errorMessage = statusCode
        ? setErrorTextByStatusCode(statusCode)
        : "알 수 없는 오류가 발생했습니다.";

      toast({
        variant: "destructive",
        title: "로그인 실패.",
        description: errorMessage,
      });
    },
  });
};
