"use client";
import { login } from "@/store/auth/authSlice";
import { AppDispatch } from "@/store/store";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Register from "./register";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [loginData, setLoginData] = useState([
    { email: "", password: "" },
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
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-start gap-1">
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          className="border-2 w-fit p-3 rounded-lg"
          onChange={(e) => handleFillLoginData(e.target.value, "email")}
        />
      </div>

      <div className="flex flex-col items-start gap-1">
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          className="border-2 w-fit p-3 rounded-lg"
          onChange={(e) => handleFillLoginData(e.target.value, "password")}
        />
      </div>

      <button
        onClick={() => { 
          handleLogin();
        }}
      >
        Login
      </button> 
    </div>
  );
}
