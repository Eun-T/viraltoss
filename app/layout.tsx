import "./globals.css";
import localFont from "next/font/local"

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
