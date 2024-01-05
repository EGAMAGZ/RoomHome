import prismaClient from "@/database/prisma.ts";
import { HandlerContext, Handlers } from "$fresh/server.ts";
import { z } from "zod";

export const handler: Handlers = {
  async GET(req: Request, _ctx: HandlerContext) {
    const url = new URL(req.url);

    const skip = z.coerce.number({
      invalid_type_error: "El parametro 'skip' debe ser un número",
      required_error: "El parametro 'skip' es requerido",
    }).parse(url.searchParams.get("skip"));

    const properties = await prismaClient.inmueblesAlquiler.findMany({
      skip: skip,
      take: 10,
      include: {
        propietarioEmpresarial: {
          select: {
            nom_empresa: true,
          },
        },
        propietarioPrivado: {
          select: {
            nom_propietario: true,
          },
        },
      },
    });

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
