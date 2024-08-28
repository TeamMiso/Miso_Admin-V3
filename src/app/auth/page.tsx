"use client";

import { Input, Button } from "@/components/ui";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormValues {
  email: string;
  password: string;
}

export default function Auth() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await new Promise((r) => setTimeout(r, 1_000));
    alert(JSON.stringify(data));
  };

  return (
    <div className="w-full h-full bg-auth bg-cover bg-center flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white w-[27rem] h-[35rem] px-6 py-10 space-y-reverse flex flex-wrap content-between border border-gray-300 rounded-[8px]"
      >
        <div>
          <h1 className="text-4xl text-green-500 font-['SemiBold'] leading-[150%]">
            미소
          </h1>
          <span className="text-2xl text-gray-300 font-['Regular']">
            환경을 웃음으로 바꾸다 :)
          </span>
        </div>
        <div className="w-full">
          <Input
            id="email"
            type="text"
            placeholder="이메일"
            {...register("email", {
              required: "이메일을 입력해주세요.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "이메일 형식에 맞게 입력해주세요.",
              },
            })}
          />
          {errors.email && (
            <small className="absolute" role="alert">
              {errors.email.message}
            </small>
          )}
          <Input
            className="placeholder-gray-500 mt-6"
            id="password"
            type="password"
            placeholder="비밀번호"
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
              minLength: {
                value: 8,
                message: "8자리 이상의 비밀번호를 작성해주세요.",
              },
              maxLength: {
                value: 24,
                message: "24자리 이하의 비밀번호를 작성해주세요.",
              },
              pattern: {
                value:
                  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])/,
                message: "비밀번호 형식에 맞게 입력해주세요.",
              },
            })}
          />
          {errors.password && (
            <small className="absolute" role="alert">
              {errors.password.message}
            </small>
          )}
        </div>
        <Button
          type="submit"
          className="w-full bg-green-500 text-white h-[3.25rem] text-lg rounded-[8px]"
          variant="ghost"
          font="lg"
          size="full"
          disabled={isSubmitting}
        >
          로그인
        </Button>
      </form>
    </div>
  );
}
