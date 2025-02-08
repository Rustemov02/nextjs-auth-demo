"use client";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { FC } from "react";
import UserIcon from "@/assets/icons/UserIcon";
import LockIcon from "@/assets/icons/LockIcon";

const LoginForm: FC<{ fillLogin: (e: any, text: string) => void }> = ({
  fillLogin,
}) => {

  const testingComp = (text : string , type : string) => {
    console.log(text , type)
  }
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-start gap-1"> 
      <Input placeholder="USERNAME" icon={<UserIcon/>} label='Username' onChange={fillLogin}/>
      <Input placeholder="PASSWORD" inputType="password" icon={<LockIcon/>} label='Password' onChange={fillLogin}/>
      </div>
    </div>
  );
};

export default LoginForm;
