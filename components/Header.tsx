interface HeaderProps {
  imgUrl: string;
  text?: string;
}

export default function Header({ imgUrl, text }: HeaderProps) {
  return (
    <header
      class="w-full h-[30vh] bg-no-repeat bg-center bg-cover flex justify-center items-center pb-4"
      style={`background-image: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('${imgUrl}')`}
    >
      {text && (
        <h1 class="font-sans text-6xl text-white">
          {text}
        </h1>
      )}
    </header>
  );
}
