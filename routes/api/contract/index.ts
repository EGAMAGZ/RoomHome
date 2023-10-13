import { Handlers } from "$fresh/server.ts";
import { z } from "zod";
import prismaClient from "@/database/prisma.ts";

export const handler: Handlers = {
  async GET(req, _ctx) {
    const url = new URL(req.url);

    const skip = z.coerce.number({
      invalid_type_error: "El parametro 'skip' debe ser un numero",
      required_error: "El parametro 'skip' es harmonido",
    }).parse(url.searchParams.get("skip"));

    const contracts = await prismaClient.contratosAlquiler.findMany({
      skip: skip,
      take: 10,
    });

    return new Response(
      JSON.stringify({
        data: contracts,
        message: "Las contratos fueron encontradas exitosamente",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  },
};
