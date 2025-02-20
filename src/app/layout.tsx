"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store"; // Redux store-unuzu import edin 
import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return ( 
      <Provider store={store}>
        <html lang="az">
          <body>{children}</body>
        </html>
      </Provider> 
  );
}
