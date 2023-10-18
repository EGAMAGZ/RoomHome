import { Alert } from "@/components/Alerts.tsx";
import { HandlerContext, Handlers, RouteContext } from "$fresh/server.ts";
import prismaClient from "@/database/prisma.ts";
import { AsigDateSchema, DateWithClientAndProperty } from "@/schema/date.ts";
import { z } from "zod";
import AsignDateForm from "@/islands/dates/AsignDateForm.tsx";
import SessionState from "@/schema/session-state.ts";
import { Data } from "@/schema/data.ts";

export const handler: Handlers<Data, SessionState> = {
  async GET(_req: Request, ctx: HandlerContext<Data, SessionState>) {
    return await ctx.render({
      error: "",
    });
  },
  async POST(req: Request, ctx: HandlerContext<Data, SessionState>) {
    const formData = await req.formData();

    try {
      const { fech_cita } = AsigDateSchema.parse(
        Object.fromEntries(formData.entries()),
      );

      const updatedDate = await prismaClient.citas.update({
        data: {
          fech_cita,
        },
        where: {
          num_cita: Number(ctx.params.id),
        },
      });

      return new Response(null, {
        status: 303,
        headers: {
          Location: "/admin/date",
        },
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return await ctx.render({
          error: error.issues.map((issue) => issue.message).join(", "),
        });
      }
      throw error;
    }
  },
};

export default async function AsignDatePage(_req: Request, ctx: RouteContext) {
  try {
    const num_cita = z.coerce.number().parse(ctx.params.id);
  } catch (error) {
    return await ctx.renderNotFound();
  }

  const date: DateWithClientAndProperty | null = await prismaClient.citas
    .findFirst({
      include: {
        inmueble: true,
        cliente: true,
      },
      where: {
        num_cita: Number(ctx.params.id),
      },
    });
  if (date === null) {
    return await ctx.renderNotFound();
  }

  return (
    <div class="flex justify-center px-4">
      <div class="container flex flex-col gap-4 py-4 font-sans">
        {ctx.data.error && <Alert message={ctx.data.error} />}
        <span class="text-xl font-semibold">Asignar fecha</span>
        <div class="card shadow">
          <div class="card-body">
            <h2 class="card-title">Informacion de cita</h2>
            <p>
              <span class="font-semibold mr-2">Direccion de inmueble:</span>
              {date?.inmueble?.dir_inmueble}
            </p>
            <p>
              <span class="font-semibold mr-2">Tipo de inmueble:</span>
              {date?.inmueble?.tipo_inmueble}
            </p>
            <p>
              <span class="font-semibold mr-2">Nombre de cliente:</span>
              {date?.cliente?.nom_cliente}
            </p>

            <p>
              <span class="font-semibold mr-2">Sucursal:</span>
              {date?.cliente?.sucregistro_cliente}
            </p>
          </div>
        </div>
        <AsignDateForm />
      </div>
    </div>
  );
}
