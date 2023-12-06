import { HandlerContext, Handlers } from "$fresh/server.ts";
import prismaClient from "@/database/prisma.ts";
import { InmueblesAlquiler } from "@/generated/client/deno/edge.ts";
import { ApiResponse } from "@/schema/api-response.ts";

export const handler: Handlers = {
  async GET(_req: Request, _ctx: HandlerContext) {
    const properties = await prismaClient.inmueblesAlquiler.findMany({
      where: {
        ContratosAlquiler: null,
      },
    });

    const body: ApiResponse<InmueblesAlquiler[]> = {
      data: properties,
      message: "Los inmuebles fueron encontrados exitosamente",
    };

    return new Response(JSON.stringify(body), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
