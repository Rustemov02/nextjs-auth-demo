"use client";
import { login, logout , register } from "@/store/auth/authSlice";
import { AppDispatch } from "@/store/store"; 
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const email = "testingEmail";
  const password = "crxxgJquHsTI7M0";
  const username = 'Mandy67'

  const handleLogin = async () => {
    await dispatch(login({ password })).unwrap();
  };

  const handleLogout = async() => {
    await dispatch(logout())
  }
  
  const handleRegister = async () => {
    await dispatch(register({username , password , email})).unwrap()
  }

  return (
    <div className="flex flex-col">
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Log Out</button>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
