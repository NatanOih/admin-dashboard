"use client";
import { authenticate, authenticate2 } from "@/app/lib/actions";
import React from "react";
import { useFormState } from "react-dom";

export default function LoginForm() {
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <>
      <form
        action={formAction}
        className="bg-bgSoft p-12 rounded-xl w-[500px] h-[500px] flex flex-col justify-center gap-8 
    [&>input]:p-7
    [&>input]:border-2
    [&>input]:border-[#we374a]
    [&>input]:rounded-md
    [&>input]:bg-bg
    [&>input]:text-text
    [&>input]:w-[100%]
    "
      >
        <h1 className="text-center text-4xl font-extrabold"> Login </h1>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <button className="p-6 bg-teal-500 text-text border-none cursor-pointer">
          Login
        </button>
        {state && state}
      </form>

      <form
        action={authenticate2}
        className="bg-bgSoft p-12 rounded-xl w-[500px] h-[500px] flex flex-col justify-center gap-8 
  [&>input]:p-7
  [&>input]:border-2
  [&>input]:border-[#we374a]
  [&>input]:rounded-md
  [&>input]:bg-bg
  [&>input]:text-text
  [&>input]:w-[100%]
  "
      >
        <h1 className="text-center text-4xl font-extrabold">
          fast login no password
        </h1>
        <input
          type="hidden"
          value="123"
          name="username"
          placeholder="username"
        />
        <input
          type="hidden"
          value="123"
          name="password"
          placeholder="password"
        />
        <button className="p-6 bg-teal-500 text-text border-none cursor-pointer">
          Login
        </button>
      </form>
    </>
  );
}
