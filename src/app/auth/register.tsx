'use client'
import { register } from "@/store/auth/authSlice";
import { AppDispatch } from "@/store/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter()
  const [registerData, setRegisterData] = useState([
    { email: "", password: "", username: "" },
  ]);
  const handleFillLoginData = (text: string, field: string) => {
    setRegisterData([{ ...registerData[0], [field]: text }]);
  };

  const handleRegister = async () => {
    try{
        const userData = {
            username : registerData[0].username,
            email : registerData[0].email,
            password : registerData[0].password
        }

        const response = await dispatch(register(userData)).unwrap()
        if(response) router.push('/')
    }catch(error){
        console.log("Error" , error)
    }
  };

  return (
    <>
      <div className="flex flex-col items-start gap-1">
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          className="border-2 w-fit p-3 rounded-lg"
          onChange={(e) => handleFillLoginData(e.target.value, "username")}
        />
      </div>
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
      <button onClick={handleRegister}>Register</button>
    </>
  );
};

export default Register;
