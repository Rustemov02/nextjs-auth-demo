"use client";
import { login, logout } from "@/store/auth/authSlice";
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

  return (
    <div className="flex flex-col">
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}
