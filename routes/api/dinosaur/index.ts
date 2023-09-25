import prismaClient from "@/database/prisma.ts";
import { HandlerContext, Handlers } from "$fresh/server.ts";
import { Dinosaur } from "@/generated/client/deno/edge.ts";

export const handler: Handlers = {
  async GET(_req: Request, _ctx: HandlerContext) {
    const dinosaurs: Dinosaur[] = await prismaClient.dinosaur.findMany();
    return new Response(
      JSON.stringify({
        data: dinosaurs,
        message: "Los elementos fueron encontrados exitosamente",
      }),
    );
  },
  async POST(req: Request, _ctx: HandlerContext) {
    const body = (await req.json()) as Dinosaur;

    const dinosaur: Dinosaur = await prismaClient.dinosaur.create({
      data: body,
    });

    return new Response(
      JSON.stringify({
        data: dinosaur,
        message: "El elemento fue creado exitosamente.",
      }),
    );
  },
};
