"use client"; 
import { useRouter } from "next/navigation";
import "./globals.css";
import Providers from "./Provider"; 
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const router = useRouter()  

  useEffect(()=>{
    const authState = JSON.parse(localStorage.getItem('authState') || "null");
    const isAuthenticated = authState?.isAuthenticated || false;
    console.log(isAuthenticated)
    if(!isAuthenticated){
      router.push("/login")
    }
     
  },[])

  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
