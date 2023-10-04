import { HandlerContext, Handlers } from "$fresh/server.ts";
import prismaClient from "@/database/prisma.ts";
import { Dinosaur, Prisma } from "@/generated/client/deno/edge.ts";
import { EditDinosaurSchema } from "@/schema/dinosaur.ts";

export const handler: Handlers = {
  async GET(_req: Request, ctx: HandlerContext) {
    const { id } = ctx.params;
    const dinosaur: Dinosaur | null = await prismaClient.dinosaur.findFirst(
      {
        where: {
          id: Number(id),
        },
      },
    );

    if (dinosaur === null) {
      return new Response(
        JSON.stringify({
          data: dinosaur,
          message: "El elemento no fue encontrado exitosamente.",
        }),
        {
          status: 404,
        },
      );
    }

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
      JSON.stringify({
        message: "El elemento fue eliminado exitosamente.",
      }),
    );
  },
  async PUT(req: Request, ctx: HandlerContext) {
    const { id } = ctx.params;
    const body = (await req.json()) as Prisma.DinosaurUpdateInput;
    const result: Prisma.DinosaurUpdateInput = EditDinosaurSchema.parse(body);

    const dinosaur: Dinosaur = await prismaClient.dinosaur.update({
      where: {
        id: Number(id),
      },
      data: result,
    });

    return new Response(
      JSON.stringify({
        data: dinosaur,
        message: "El elemento fue actualizado exitosamente.",
      }),
    );
  },
};
