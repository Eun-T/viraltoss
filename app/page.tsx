import Channel from "@/components/Common/Channel";
import Explanation from "@/components/Common/Explanation";
import Friend from "@/components/Common/Friend";
import Main from "@/components/Common/Main";
import Secret from "@/components/Common/Secret";
import Service from "@/components/Common/Service";
import Talk from "@/components/Common/Talk";
import UpArrow from "@/components/Common/UpArrow";
import Waiting from "@/components/Common/Waiting";
import Website from "@/components/Common/Website";
import Worry from "@/components/Common/Worry";
import Youtuber from "@/components/Common/Youtuber";

import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Header/Nav";

export default function Home() {
  return (
    <div>
      {/* <UpArrow /> */}
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
