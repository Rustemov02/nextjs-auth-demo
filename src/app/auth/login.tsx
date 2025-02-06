"use client";
import { FC } from "react";

const LoginForm: FC<{ fillLogin: (e: any, text: string) => void }> = ({
  fillLogin,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-start gap-1">
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          className="border-2 w-fit p-3 rounded-lg"
          onChange={(e) => fillLogin(e.target.value, "email")}
        />
      </div>

      <div className="flex flex-col items-start gap-1">
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          className="border-2 w-fit p-3 rounded-lg"
          onChange={(e) => fillLogin(e.target.value, "password")}
        />
      </div>
    </div>
  );
};

export default LoginForm;
