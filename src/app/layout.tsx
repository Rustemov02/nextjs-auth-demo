import { IntlProvider } from "next-intl";
import { cookies } from "next/headers";

import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
  messages: Record<string, string>;
}

export default async function RootLayout({
  children,
  messages,
}: RootLayoutProps) {
  const cookieStore = await cookies();  
  const locale = cookieStore.get("locale")?.value || "az";

  return (
    <html lang={locale}>
      <body>
        {children && (
          <IntlProvider locale={locale} messages={messages}>
            {children}
          </IntlProvider>
        )}
      </body>
    </html>
  );
}
