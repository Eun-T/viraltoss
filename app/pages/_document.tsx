import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          {/* <meta charSet="utf-8"></meta>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
          <meta name="theme-color" content="#3182F6"></meta> */}
          <meta name="msapplication-navbutton-color" content="#3182F6"></meta>
          {/* <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          ></meta> */}
          {/* <meta name="application-name" content="바이럴토스"></meta> */}
          <meta name="msapplication-tooltip" content="바이럴토스"></meta>
          {/* <meta
            id="meta_og_title"
            property="og:title"
            content="바이럴토스"
          ></meta> */}
          {/* <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch.png"
          ></link> */}
          {/* <link 
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favi32.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favi16.png"
          ></link> */}
          <link rel="manifest" href="/site.webmanifest"></link>
          <link
            rel="canonical"
            href="https://www.viraltoss.com/"
            key="canonical"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
