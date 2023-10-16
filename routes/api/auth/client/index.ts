import { HandlerContext, Handlers } from "$fresh/server.ts";
import { Prisma } from "@/generated/client/deno/edge.ts";
import { RegisterClientSchema } from "@/schema/client.ts";
import prismaClient from "@/database/prisma.ts";
import { generateHash } from "@/utils/hash.ts";
import { z } from "zod";

export const handler: Handlers = {
  async POST(req, _ctx) {
    const body = (await req.json()) as Prisma.ClientesCreateInput;

    const result = RegisterClientSchema.parse(
      body,
    );

    const password = await generateHash(result.pass_cliente);

    const client = await prismaClient.clientes.create({
      data: {
        nom_cliente: result.nom_cliente,
        tel_cliente: result.tel_cliente,
        tipo_inmueble: result.tipo_inmueble,
        importmax_inmueble: result.importmax_inmueble,
        nom_empleado: result.nom_empleado,
        sucregistro_cliente: result.sucregistro_cliente,
        email_cliente: result.email_cliente,
        pass_cliente: password,
      },
    });

    return new Response(
      JSON.stringify({
        data: client,
        message: "El cliente fue creado exitosamente.",
      }),
    );
  },
  async GET(req: Request, ctx: HandlerContext) {
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
