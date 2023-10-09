import { HandlerContext, Handlers } from "$fresh/server.ts";
import prismaClient from "@/database/prisma.ts";
import { z } from "zod";
import { Prisma } from "@/generated/client/deno/edge.ts";
import { RegisterPropertySchema } from "@/schema/property.ts";
import { InmueblesAlquilerWithPropietary } from "@/model/property.ts";

export const handler: Handlers = {
  async GET(req: Request, _ctx: HandlerContext) {
    const url = new URL(req.url);

    const skip = z.coerce.number({
      invalid_type_error: "El parametro 'skip' debe ser un numero",
      required_error: "El parametro 'skip' es requerido",
    }).parse(url.searchParams.get("skip"));

    const properties: InmueblesAlquilerWithPropietary[] = await prismaClient
      .inmueblesAlquiler
      .findMany({
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
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  },
  async POST(req: Request, _ctx: HandlerContext) {
    const body = (await req.json()) as Prisma.InmueblesAlquilerCreateInput;
    const result = RegisterPropertySchema
      .parse(body);

    const property = await prismaClient.inmueblesAlquiler.create({
      data: {
        dir_inmueble: result.address,
        tipo_inmueble: result.type,
        import_mensual: result.amount,
        num_habitaciones: result.rooms,
        num_propietario: result.privateOwner,
        num_propietario_emp: result.empresarialOwner,
      },
    });

    return new Response(
      JSON.stringify({
        data: property,
        message: "El inmueble fue creado exitosamente.",
      }),
    );
  },
};
