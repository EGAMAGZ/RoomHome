import Header from "@/components/Header.tsx";
import { PageProps } from "$fresh/server.ts";
import SessionState from "@/model/session-state.ts";

export default function Home(props: PageProps<any, SessionState>) {
  return (
    <>
      <Header
        imgUrl="/img/guillaume_meurice.jpg"
        isLoggedIn={props.state.isLoggedIn}
      />
    </>
  );
}
