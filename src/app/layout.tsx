import { getLocale, getMessages } from "next-intl/server";
import { ClientProvider } from "./ClientProvider"; 
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <ClientProvider messages={messages} locale={locale}>{children}</ClientProvider>
      </body>
    </html>
  );
}
