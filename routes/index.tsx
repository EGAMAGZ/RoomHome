import Hero from "@/components/Hero.tsx";
import { PageProps } from "$fresh/server.ts";
import SessionState from "@/schema/session-state.ts";

export default function Home(props: PageProps<any, SessionState>) {
  return (
    <>
      <Hero
        imgUrl="/img/guillaume_meurice.jpg"
        isLoggedIn={props.state.isLoggedIn}
      />
    </>
  );
}
