import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local"

// const inter = Inter({ subsets: ["latin"] });

export const pretendardVariable = localFont({
  src: "./fonts/PretendardVariable.ttf",
  weight:'100 900'
})

export const helvetica = localFont({
  src: "./fonts/Helvetica-Light.ttf",
  weight:'100 900'
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
    <html lang="ko" className={pretendardVariable.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
