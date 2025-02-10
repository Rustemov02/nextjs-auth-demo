"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { AppDispatch } from "@/store/store";
import { login } from "@/store/auth/authSlice";
import LoginForm from "./login";
import BasketIcon from "@/assets/icons/Basket";
import Button from "@/components/Button/Button";

const AuthPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [loginData, setLoginData] = useState([{ USERNAME: "", PASSWORD: "" }]);
  const [errData, setErrData] = useState({
    mailErr: false,
    passErr: false,
    loginErr: false,
  });

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
      const username = loginData?.[0]?.USERNAME || "";
      const password = loginData?.[0]?.PASSWORD || "";

      if (!username && !password) {
        setErrData({
          ...errData,
          loginErr: true,
          mailErr: true,
          passErr: true,
        });
      } else if (!username) {
        setErrData({
          ...errData,
          loginErr: true,
          mailErr: true,
          passErr: false,
        });
      } else if (!password) {
        setErrData({
          ...errData,
          loginErr: true,
          mailErr: false,
          passErr: true,
        });
      } else {
        setErrData({
          ...errData,
          loginErr: true,
          mailErr: false,
          passErr: false,
        });
      }
    }
  };

  const handleError = () => {
    console.log("Error catching !");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#264ECA]">
      <div className=" flex flex-col items-center justify-center gap-5 w-1/2">
        <div>
          <BasketIcon size={200} />
        </div>
        <div className="flex flex-col items-center justify-center gap-5"> 
           
          <LoginForm fillLogin={handleFillLoginData} errData={errData} />

          <Button
            text="Login"
            onClick={handleLogin}
            handleError={handleError}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
