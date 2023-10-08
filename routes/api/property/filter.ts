import { HandlerContext, Handlers } from "$fresh/server.ts";
import prismaClient from "@/database/prisma.ts";
import { PropertyFilterSchema } from "@/schema/property.ts";

export const handler: Handlers = {
  async GET(req: Request, _ctx: HandlerContext) {
    const url = new URL(req.url);

    const { amount, rooms, skip } = PropertyFilterSchema.parse({
      amount: url.searchParams.get("amount"),
      rooms: url.searchParams.get("rooms"),
      skip: url.searchParams.get("skip"),
    });

    const properties = await prismaClient.inmueblesAlquiler
      .findMany({
        skip: skip,
        take: 10,
        where: {
          import_mensual: {
            gte: amount,
          },
          num_habitaciones: {
            gte: rooms,
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
};
