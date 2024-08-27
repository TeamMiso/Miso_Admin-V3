"use client";

import { Input, Button } from "@/components/ui";
import { useForm } from "react-hook-form";

export default function Auth() {
  const { register, handleSubmit } = useForm();

  return (
    <main className="w-full h-full">
      <form onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
        <Input
          id="email"
          type="text"
          placeholder="이메일"
          {...register("email")}
        />
        <Input
          id="password"
          type="password"
          placeholder="비밀번호"
          {...register("password")}
        />
        <Button type="submit">로그인</Button>
      </form>
    </main>
  );
}
