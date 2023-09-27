import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { Dinosaur } from "@/generated/client/deno/edge.ts";
import { useComputed, useSignal } from "@preact/signals";
import prismaClient from "@/database/prisma.ts";
import { NewDinosaourForm } from "../../islands/dinosaur/NewDinosaurForm.tsx";
import { DinosaurList } from "@/islands/dinosaur/DinosaurList.tsx";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers<Dinosaur[]> = {
  async GET(_req, ctx: HandlerContext<Dinosaur[]>) {
    const dinosaurs: Dinosaur[] = await prismaClient.dinosaur.findMany();
    return ctx.render(dinosaurs);
  },
};

export default function DinosaurPage(props: PageProps<Dinosaur[]>) {
  const dinosaurs = useSignal<Dinosaur[]>(props.data);
  const total = useComputed(() => dinosaurs.value.length);

  return (
    <>
      <Head>
        <title>Mis dinosaurios favoritos - RoomHome</title>
      </Head>
      <div class="p-4 flex flex-col gap-4">
        <h1 class="text-4xl pb-4 font-semibold">
          Mis dinosaurios favoritos :D - Total: {total}
        </h1>
        <NewDinosaourForm dinosaurs={dinosaurs} />
        <DinosaurList dinosaurs={dinosaurs} />
      </div>
    </>
  );
}
