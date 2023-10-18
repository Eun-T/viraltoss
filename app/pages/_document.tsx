import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

// ...

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* 다른 헤드 요소들 추가 가능 */}
          
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  var w = window;
                  if (w.ChannelIO) {
                    return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
                  }
                  var ch = function() {
                    ch.c(arguments);
                  };
                  ch.q = [];
                  ch.c = function(args) {
                    ch.q.push(args);
                  };
                  w.ChannelIO = ch;
                  function l() {
                    if (w.ChannelIOInitialized) {
                      return;
                    }
                    w.ChannelIOInitialized = true;
                    var s = document.createElement('script');
                    s.type = 'text/javascript';
                    s.async = true;
                    s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
                    s.charset = 'UTF-8';
                    var x = document.getElementsByTagName('script')[0];
                    x.parentNode.insertBefore(s, x);
                  }
                  if (document.readyState === 'complete') {
                    l();
                  } else if (window.attachEvent) {
                    window.attachEvent('onload', l);
                  } else {
                    window.addEventListener('DOMContentLoaded', l, false);
                    window.addEventListener('load', l, false);
                  }
                })();
                ChannelIO('boot', {
                  "pluginKey": "9d0c3958-78f9-49ef-a7c6-9f664841c19c",
                  "memberId": "USER_MEMBER_ID", // fill user's member id
                  "profile": { // fill user's profile
                    "name": "USER_NAME", // fill user's name
                    "mobileNumber": "USER_MOBILE_NUMBER", // fill user's mobile number
                    "landlineNumber": "USER_LANDLINE_NUMBER", // fill user's landline number  
                    "CUSTOM_VALUE_1": "VALUE_1", // custom property
                    "CUSTOM_VALUE_2": "VALUE_2" // custom property
                  }
                });
              `,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
