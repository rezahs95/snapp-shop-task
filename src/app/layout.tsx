import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { Header } from "@/components/";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "تسک مصاحبه اسنپ شاپ",
  description: "توسط رضا رضایی",
};

const vazirFont = Vazirmatn({
  subsets: ["arabic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirFont.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
