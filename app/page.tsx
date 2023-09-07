import Community from "@/components/Common/Community";
import Main from "@/components/Common/Main";
import Nav from "@/components/Header/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Main />
        <Community />
      </main>
    </>
  );
}
