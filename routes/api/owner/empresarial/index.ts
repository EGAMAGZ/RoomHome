import { HandlerContext, Handlers } from "$fresh/server.ts";
import prismaClient from "@/database/prisma.ts";

export const handler: Handlers = {
  async GET(_req: Request, _ctx: HandlerContext) {
    const owners = await prismaClient.propietariosEmpresariales.findMany({
      select: {
        num_propietario_em: true,
        nom_contacto: true
      },
    });

    return new Response(
      JSON.stringify({
        data: owners,
        message: "Los elementos fueron encontrados exitosamente",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  },
};
