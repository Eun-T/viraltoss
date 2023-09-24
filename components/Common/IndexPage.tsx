import Head from "next/head";
import React from "react";

type Props = {};

const IndexPage = (props: Props) => {
  return (
    <Head>
      {/* <title>My page title</title> */}
      <meta property="og:title" content="ViralToss" />
      <meta property="og:description" content="The Rock Description" />
      <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
      <meta
        property="og:image"
        content="https://ia.media-imdb.com/images/rock.jpg"
      />
    </Head>
  );
};

export default IndexPage;
