import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import "./globals.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const metadata = {
  title: "App Landing",
  description: "App landing page desc",
};
export default async function LocaleLayout({ children, params }) {
  const { locale } = params;
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={locale === "ar" ? "__rtl_lang text-right" : ""}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
