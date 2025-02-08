"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { AppDispatch } from "@/store/store";
import { login } from "@/store/auth/authSlice";
import LoginForm from "./login";

const AuthPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [loginData, setLoginData] = useState([{ USERNAME: "", PASSWORD: "" }]);

  const handleFillLoginData = (text: string, field: string) => {
    setLoginData([{ ...loginData[0], [field]: text }]);
  };

  const handleLogin = async () => {
    try {
      const userData = {
        email: loginData[0].USERNAME,
        password: loginData[0].PASSWORD,
      };
      const result = await dispatch(login(userData)).unwrap();
      if (result) router.push("/");
    } catch (error) {
      console.log("Login Error : ", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#264ECA]">
      <LoginForm fillLogin={handleFillLoginData} />
      <button
        className="bg-[#566aa0] text-white px-4 py-2 rounded-lg"
        onClick={() => {
          handleLogin();
        }}
      >
        Login
      </button>
    </div>
  );
};

export default AuthPage;
