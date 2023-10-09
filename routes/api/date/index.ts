import { Handlers } from "$fresh/server.ts";
import { RequestDateSchema } from "@/schema/date.ts";
import prismaClient from "@/database/prisma.ts";
import { Citas, Prisma } from "@/generated/client/deno/edge.ts";

export const handler: Handlers = {
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
