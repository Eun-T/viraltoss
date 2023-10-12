import Header from "@/components/Common/Header";
import "./globals.css";
import { Metadata } from "next";
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

export const jalnan = localFont({
  src: "./fonts/Jalnan.ttf",
  weight:'100 900'
})

// export const metadata: Metadata = {
//   title: "바이럴토스",
//   description: "바이럴마케팅을 원하시나요? 카페,블로그,브랜드마케팅 그리고 컨설팅까지! 소규모 정예로 이루어진 전문가에게 맡기세요. 언제든지 연락만 주시면 바이럴토스는 고객님을 직접 찾아갑니다.",
//   icons: {
//     icon: "/favicon/favi32.png",
//   },
// };

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
