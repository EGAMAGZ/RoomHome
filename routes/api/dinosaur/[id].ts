import { HandlerContext, Handlers } from "$fresh/server.ts";
import prismaClient from "@/database/prisma.ts";
import { Dinosaur } from "@/generated/client/index.d.ts";

export const handler: Handlers = {
  async GET(_req: Request, ctx: HandlerContext) {
    const { id } = ctx.params;
    const dinosaur: Dinosaur = await prismaClient.dinosaur.findFirst(
      {
        where: {
          id: Number(id),
        },
      },
    );

    return new Response(
      JSON.stringify({
        data: dinosaur,
        message: "El elemento fue encontrado exitosamente.",
      }),
    );
  },
  async DELETE(_req: Request, ctx: HandlerContext) {
    const { id } = ctx.params;

    await prismaClient.dinosaur.delete({
      where: {
        id: Number(id),
      },
    });

    return new Response(
      JSON.stringify({}),
    );
  },
};
