import Explanation from "@/components/Common/Explanation";
import Main from "@/components/Common/Main";
import Service from "@/components/Common/Service";
import UpArrow from "@/components/Common/UpArrow";
import Waiting from "@/components/Common/Waiting";
import Website from "@/components/Common/Website";
import Worry from "@/components/Common/Worry";
import Youtuber from "@/components/Common/Youtuber";
import Nav from "@/components/Header/Nav";

export default function Home() {
  return (
    <>
      <UpArrow />
      <Nav />
      <main>
        <Main />
        <Explanation />
        <Website />
        <Worry />
        <Youtuber />
        <Service />
        <Waiting />
      </main>
    </>
  );
}
