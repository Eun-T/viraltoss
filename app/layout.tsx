import "./globals.css";
import localFont from "next/font/local"

// export const pretendardVariable = localFont({
//   src: "./fonts/PretendardVariable.ttf",
//   weight:'100 900',
//   display: 'swap',
//   variable: '--pretend'
// })

export const pretendardVariable = localFont({
  src: [
    {
      path: '../components/fonts/Pretendard-Black.woff',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../components/fonts/Pretendard-Bold.woff',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../components/fonts/Pretendard-ExtraBold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../components/fonts/Pretendard-ExtraLight.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../components/fonts/Pretendard-Light.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../components/fonts/Pretendard-Medium.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../components/fonts/Pretendard-Regular.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../components/fonts/Pretendard-SemiBold.woff',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../components/fonts/Pretendard-Thin.woff',
      weight: '100',
      style: 'normal',
    },
  ],
})

export const helvetica = localFont({
  src: "../components/fonts/Helvetica-Light.ttf",
  weight:'100 900',
  display: 'swap',
})

export const jalnan = localFont({
  src: "../components//fonts/JalnanOTF.otf",
  weight:'100 900',
  display: 'swap',
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
