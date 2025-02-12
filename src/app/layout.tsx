import { getLocale, getMessages } from "next-intl/server";
import { ClientProvider } from "./ClientProvider"; // Yeni client componenti içe aktarın
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
