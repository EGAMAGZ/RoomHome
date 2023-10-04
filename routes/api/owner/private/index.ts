import { HandlerContext, Handlers } from "$fresh/server.ts";
import prismaClient from "@/database/prisma.ts";
import { z } from "zod";
import { Prisma } from "@/generated/client/deno/edge.ts";
import { RegisterPrivateOwnerSchema } from "@/schema/owner-private.ts";

export const handler: Handlers = {
  async GET(req: Request, _ctx: HandlerContext) {
    const url = new URL(req.url);

    const skip = z.coerce.number({
      invalid_type_error: "El parametro 'skip' debe ser un numero",
      required_error: "El parametro 'skip' es requerido",
    }).parse(url.searchParams.get("skip"));
    const owners = await prismaClient.propietariosPrivados.findMany({
      skip: url.searchParams.has("skip") ? skip : 0,
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

  async POST(_req: Request, _ctx: HandlerContext) {
    const body = (await _req.json()) as Prisma.PropietariosPrivadosCreateInput;
    const result = RegisterPrivateOwnerSchema.parse(body);

    const owner = await prismaClient.propietariosPrivados.create({
      data: {
        nom_propietario: result.name,
        dir_propietario: result.address,
        tel_propietario: result.phone,
      },
    });

    return new Response(
      JSON.stringify({
        data: owner,
        message: "El propietario fue creado exitosamente.",
      }),
    );
  },
};
