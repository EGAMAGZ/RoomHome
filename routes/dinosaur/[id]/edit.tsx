import { RouteContext } from "$fresh/server.ts";
import prismaClient from "@/database/prisma.ts";
import { Dinosaur } from "@/generated/client/deno/edge.ts";
import { EditDinosaur } from "@/islands/dinosaur/EditDinosaur.tsx";

export default async function DinosaurEditPage(
  _req: Request,
  ctx: RouteContext,
) {
  const dinosaur: Dinosaur | null = await prismaClient.dinosaur.findUnique({
    where: {
      id: Number(ctx.params.id),
    },
  });
  return (
    <div>
        <EditDinosaur dinosaur={dinosaur} />
    </div>
  );
}
