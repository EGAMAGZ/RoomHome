import prismaClient from "@/database/prisma.ts";
import { RouteContext } from "$fresh/server.ts";
import { Dinosaur } from "@/generated/client/deno/edge.ts";

export default async function DinosaurDescriptionPage(
  _req: Request,
  ctx: RouteContext,
) {
  const dinosaur: Dinosaur | null = await prismaClient.dinosaur.findUnique({
    where: {
      id: Number(ctx.params.id),
    },
  });

  return (
    <div class="p-4">
      <div class="border-1 border-black rounded-md flex flex-col p-4 gap-2">
        <div class="bg-black text-white p-2 text-center rounded-sm">
          <span>
            <b>Index:</b> {dinosaur?.id}
          </span>
        </div>
        <div class="flex flex-col">
          <span>
            <b>Nombre:</b> {dinosaur?.name}
          </span>
          {dinosaur?.description && (
            <span>
              <b>Descripción:</b> {dinosaur.description}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
