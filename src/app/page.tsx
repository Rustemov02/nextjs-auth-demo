"use client";
import { logout } from "@/store/auth/authSlice";
import { AppDispatch } from "@/store/store";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter
  ()
  const handleLogout = () => {
    try{
      dispatch(logout());
      router.push("/login")
    }catch(error){
      console.log("error : " , error)
    }
  };

  return ( 
    <div className="flex flex-col items-center justify-center gap-10">
      <p className="border-2 text-3xl"> Welcome to my webSite :)</p>

      <button className="py-3 px-5 border-2 border-green-400 pointer rounded-lg" onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Home;
