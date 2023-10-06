import prismaClient from "@/database/prisma.ts";
import { HandlerContext, Handlers } from "$fresh/server.ts";
import { Dinosaur, Prisma } from "@/generated/client/deno/edge.ts";
import { NewDinosaurSchema } from "@/schema/dinosaur.ts";

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
    const body = (await req.json()) as Prisma.DinosaurCreateInput;
    const result: Prisma.DinosaurCreateInput = NewDinosaurSchema.parse(body);

    const dinosaur: Dinosaur = await prismaClient.dinosaur.create({
      data: result,
    });

    return new Response(
      JSON.stringify({
        data: dinosaur,
        message: "El elemento fue creado exitosamente.",
      }),
    );
  },
};
