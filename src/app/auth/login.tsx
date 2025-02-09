"use client";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { FC } from "react";
import UserIcon from "@/assets/icons/UserIcon";
import LockIcon from "@/assets/icons/LockIcon";

const LoginForm: FC<{
  fillLogin: (e: any, text: string) => void;
  errData: { mailErr: boolean; passErr: boolean ,loginErr: boolean };
}> = ({ fillLogin, errData }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full">
      {errData.loginErr && <p className="text-red-500 text-sm">Mail or password are wrong !</p>}
      <div className="flex flex-col items-start gap-1 ">
        <Input
          placeholder="USERNAME"
          icon={<UserIcon />}
          label="Username"
          onChange={fillLogin}
        />
        {errData.mailErr && (
          <p className="text-red-500 text-sm">
            Please fill the username fields !
          </p>
        )}
        <Input
          placeholder="PASSWORD"
          inputType="password"
          icon={<LockIcon />}
          label="Password"
          onChange={fillLogin}
        />
        {errData.passErr && (
          <p className="text-red-500 text-sm">
            Please fill the password fields !
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
