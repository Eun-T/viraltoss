import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local"

// const inter = Inter({ subsets: ["latin"] });

const pretendard = localFont({
  src: "./fonts/Pretendard-Medium.woff",
  weight: '100 900'
})

export const helvetica = localFont({
  src: "./fonts/Helvetica Light.ttf",
  weight: '100 900'
})

export const metadata: Metadata = {
  title: "ViralToss",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
