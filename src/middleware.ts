import { NextResponse, NextRequest } from "next/server";
const locales = ["en", "az", "tr"]; // Define the locales array

// Locale yönlendirmesi yapılacak
export function middleware(request: NextRequest) {
  const locale = request.cookies.get("NEXT_LOCALE")?.value || "az"; // Varsayılan locale: az
  const url = new URL(request.url);
  
  // Eğer locale belirli değilse, varsayılan locale'yi kullan
  if (!locales.includes(locale)) {
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  // Locale'i header olarak ekle
  const response = NextResponse.next();
  response.headers.set("X-Locale", locale);

  return response;
}
