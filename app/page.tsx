import Channel from "@/components/Common/Channel";
import Explanation from "@/components/Common/Explanation";
import Friend from "@/components/Common/Friend";
import Header from "@/components/Common/Header";
import Main from "@/components/Common/Main";
import Service from "@/components/Common/Service";
import Youtuber from "@/components/Common/Youtuber";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Header/Nav";


export default function Home() {
  return (
    <div>
      <Header />
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
