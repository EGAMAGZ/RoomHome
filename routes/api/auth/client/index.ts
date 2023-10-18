import { HandlerContext, Handlers } from "$fresh/server.ts";
import prismaClient from "@/database/prisma.ts";

export const handler: Handlers = {
  async GET(_req: Request, _ctx: HandlerContext) {

    const clients = await prismaClient.clientes.findMany();

    return new Response(
      JSON.stringify({
        data: clients,
        message: "Los elementos fueron encontrados exitosamente",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  },
};
