import Channel from "@/components/Common/Channel";
import Explanation from "@/components/Common/Explanation";
import Friend from "@/components/Common/Friend";
import Main from "@/components/Common/Main";
import Service from "@/components/Common/Service";
import Youtuber from "@/components/Common/Youtuber";

import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Header/Nav";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>페이지 타이틀</title>
        <link
          rel="canonical"
          href="https://www.viraltoss.com"
          key="canonical"
        />
        <meta
          name="description"
          content="검색 엔진에서 검색되는 데이터"
          key="desc"
        />
        <meta property="og:title" content="The Rock" />
        <meta property="og:description" content="The Rock Description" />
        <meta
          property="og:url"
          content="https://www.imdb.com/title/tt0117500/"
        />
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
        <meta property="og:image:alt" content="About Acme" />
        <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />
        <meta property="twitter:image:alt" content="About Acme" />
      </Head>
      <Nav />
      <main>
        <Main />
        <Service />
        <Youtuber />
        <Explanation />
        <Friend />
        <Channel />
      </main>
      <Footer />
    </div>
  );
}
