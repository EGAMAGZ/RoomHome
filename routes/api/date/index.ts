import { HandlerContext, Handlers } from "$fresh/server.ts";
import { RequestDateSchema } from "@/schema/date.ts";
import prismaClient from "@/database/prisma.ts";
import { Citas, Prisma } from "@/generated/client/deno/edge.ts";
import { z } from "zod";
import { DateWithClientAndProperty } from "@/schema/date.ts";

export const handler: Handlers = {
  async GET(req: Request, _ctx: HandlerContext) {
    const url = new URL(req.url);

    const skip = z.coerce.number({
      invalid_type_error: "El parametro 'skip' debe ser un numero",
      required_error: "El parametro 'skip' es requerido",
    }).parse(url.searchParams.get("skip"));

    const dates: DateWithClientAndProperty[] = await prismaClient.citas
      .findMany({
        include: {
          inmueble: true,
          cliente: true,
        },
        skip: skip,
        take: 10,
      });

    return new Response(
      JSON.stringify({
        data: dates,
        message: "Las citas fueron encontradas exitosamente",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  },
  async POST(req, _ctx) {
    const body = (await req.json()) as Prisma.CitasCreateInput;

    const result = RequestDateSchema.parse(body);

    const cita: Citas = await prismaClient.citas.create({
      data: {
        num_cliente: result.userId,
        num_inmueble: result.propertyId,
      },
    });

    return new Response(
      JSON.stringify({
        data: cita,
        message: "Cita fue creada exitosamente",
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
};
