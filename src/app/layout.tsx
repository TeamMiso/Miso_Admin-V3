import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "./provider";
import "./globals.css";
import { Toaster } from "@/components/ui";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miso Admin",
  description: "미소의 관리자 전용 페이지입니다.",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="w-full h-full" lang="en">
      <body className={`${inter.className} w-full h-full`}>
        <Provider>
          {children}
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
