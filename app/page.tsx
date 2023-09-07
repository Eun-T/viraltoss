import Community from "@/components/Common/Community";
import Main from "@/components/Common/Main";
import UpArrow from "@/components/Common/UpArrow";
import Nav from "@/components/Header/Nav";

export default function Home() {
  return (
    <>
      <UpArrow />
      <Nav />
      <main>
        <Main />
        <Community />
      </main>
    </>
  );
}
