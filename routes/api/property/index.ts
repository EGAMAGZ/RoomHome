import prismaClient from "@/database/prisma.ts";
import { HandlerContext, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req: Request, _ctx: HandlerContext) {
    const properties = await prismaClient.inmueblesAlquiler.findMany();

    return new Response(
      JSON.stringify({
        data: properties,
        message: "Los inmuebles fueron encontrados exitosamente",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  },
};
