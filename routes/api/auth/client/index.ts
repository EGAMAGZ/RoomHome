import { HandlerContext, Handlers } from "$fresh/server.ts";
import { Prisma } from "@/generated/client/deno/edge.ts";
import { RegisterClientSchema } from "@/schema/client.ts";
import prismaClient from "@/database/prisma.ts";
import { generateHash } from "@/utils/hash.ts";
import { z } from "zod";

export const handler: Handlers = {
  async GET(req: Request, _ctx: HandlerContext) {
    const url = new URL(req.url);

    const skip = z.coerce.number({
      invalid_type_error: "El parametro 'skip' debe ser un numero",
      required_error: "El parametro 'skip' es requerido",
    }).parse(url.searchParams.get("skip"));

    const clients = await prismaClient.clientes.findMany({
      skip: skip,
      take: 10,
    });

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
