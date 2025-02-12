"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import { NextIntlClientProvider } from "next-intl";

export function ClientProvider({
  children,
  messages,
  locale
}: {
  children: React.ReactNode;
  messages: any;
  locale : string;
}) {
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <Provider store={store}>{children}</Provider>
    </NextIntlClientProvider>
  );
}
