import { HandlerContext, Handlers } from "$fresh/server.ts";
import prismaClient from "@/database/prisma.ts";
import { z } from "zod";
import { Prisma } from "@/generated/client/deno/edge.ts";
import { RegisterEmpresarialOwnerSchema } from "@/schema/empresarial-owner.ts";

export const handler: Handlers = {
  async GET(req: Request, _ctx: HandlerContext) {
    const url = new URL(req.url);

    const skip = z.coerce.number({
      invalid_type_error: "El parametro 'skip' debe ser un numero",
      required_error: "El parametro 'skip' es requerido",
    }).parse(url.searchParams.get("skip"));

    const owners = await prismaClient.propietariosEmpresariales.findMany({
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
    const body =
      (await _req.json()) as Prisma.PropietariosEmpresarialesCreateInput;

    const result = RegisterEmpresarialOwnerSchema.parse(body);

    const owner = await prismaClient.propietariosEmpresariales.create({
      data: {
        dir_empresa: result.address,
        nom_empresa: result.company,
        tel_empresa: result.phone,
        nom_contacto: result.name,
        tipo_empresa: result.type,
      },
    });

    return new Response(
      JSON.stringify({
        data: owner,
        message: "El propietario fue creado exitosamente.",
      }),
      {
        headers: { "Content-Type": "application/json" },
      },
    );
  },
};
