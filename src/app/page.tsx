"use client";
import { login } from "@/store/auth/authSlice";
import { AppDispatch } from "@/store/store";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const email = "testingEmail";
  const password = "123sdfas";

  const handleFetch = async () => {
    await dispatch(login({ email, password })).unwrap();
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Main Page
      <button onClick={handleFetch}>Fetch Data</button>
    </div>
  );
}
