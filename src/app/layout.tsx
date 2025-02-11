"use client";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; 

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode}>) {
  const router = useRouter();
  const [messages , setMessages] = useState(null);
  const [locale, setLocale] = useState("az"); 
  useEffect(() => {
    // if (!localStorage.getItem("isAuth")) router.push("/auth");
  }, []);
 
  useEffect(()=>{
    const currentLocale = router.locale || "az";  
    

  },[])
 
  return (
    <html lang='en'> 
        <Provider store={store}>
          <body>{children}</body>
        </Provider> 
    </html>
  );
}
