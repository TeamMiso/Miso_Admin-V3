"use client";

import { Input, Button } from "@/components/ui";
import { useForm } from "react-hook-form";

export default function Auth() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  return (
    <div className="w-full h-full bg-auth bg-cover bg-center flex items-center justify-center">
      <form
        onSubmit={handleSubmit(async (data) => {
          await new Promise((r) => setTimeout(r, 1_000));
          alert(JSON.stringify(data));
        })}
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
        <div className="w-full space-y-4">
          <Input
            id="email"
            type="text"
            placeholder="이메일"
            {...register("email")}
          />
          <Input
            className="placeholder-gray-500"
            id="password"
            type="password"
            placeholder="비밀번호"
            {...register("password")}
          />
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
