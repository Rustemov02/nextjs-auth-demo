'use client'
import { Provider } from "react-redux";
import { store } from "@/store/store";
import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
  messages: Record<string, string>;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="az">
      <Provider store={store}>
        <body>{children}</body>
      </Provider>
    </html>
  );
}
