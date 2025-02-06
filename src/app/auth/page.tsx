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
  const [loginData, setLoginData] = useState([
    { email: "info@atiahi.org", password: "ATIAHI+2025!@" },
  ]);

  const handleFillLoginData = (text: string, field: string) => {
    setLoginData([{ ...loginData[0], [field]: text }]);
  };

  const handleLogin = async () => {
    try {
      const userData = {
        email: loginData[0].email,
        password: loginData[0].password,
      };
      const result = await dispatch(login(userData)).unwrap();
      if (result) router.push("/");
    } catch (error) {
      console.log("Login Error : ", error);
    }
  };

  return (
    <div className="flex flex-col items-center h-screen bg-[#264ECA]">
      <LoginForm fillLogin={handleFillLoginData}/>
      <button
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
