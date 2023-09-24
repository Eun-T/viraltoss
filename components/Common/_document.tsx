import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <script
            async
            src="https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.channel.min.js"
            integrity="sha384-bg2pMhokxyx1zeEM2ol2hJtBagKMjRIZDVI/KITe+j2U5K+Or6HPY1lWDWY8ubEN"
            crossOrigin="anonymous"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.kakaoAsyncInit = function() {
                Kakao.Channel.createAddChannelButton({
                  container: '#kakao-talk-channel-add-button',
                });
              };
              `,
            }}
          ></script>
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
