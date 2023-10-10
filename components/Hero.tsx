import { LOGIN_URL } from "@/utils/config.ts";

interface HeaderProps {
  imgUrl: string;
  text?: string;
  isLoggedIn: boolean;
}

export default function Hero({ imgUrl, text, isLoggedIn }: HeaderProps) {
  return (
    <header
      class="hero min-h-screen"
      style={`background-image: url(${imgUrl});`}
    >
      <div class="hero-overlay bg-opacity-60 "></div>
      <div class="hero-content text-center text-neutral-content font-sans">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">RoomHome</h1>
          <p class="mb-5">
            Tu nuevo hogar al alcance de un click
          </p>
          {!isLoggedIn &&
            <a href={LOGIN_URL} class="btn btn-primary">Iniciar sesion</a>}
        </div>
      </div>
    </header>
  );
}
