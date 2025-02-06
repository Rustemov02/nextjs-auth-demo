"use client"
import { logout } from "@/store/auth/authSlice";
import { AppDispatch } from "@/store/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";


export default function Home() {

  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()

  const handleLogout = () => {
      dispatch(logout())
      router.push('/auth')
      
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        Home Page

        <button onClick={handleLogout}>Log out</button>
    </div>
  );
}
