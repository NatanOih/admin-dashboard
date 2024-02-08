import React from "react";
import { authenticate } from "../lib/actions";
import LoginForm from "../ui/login/loginForm";

export default function LoginPage() {
  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center">
      <LoginForm />
    </div>
  );
}
