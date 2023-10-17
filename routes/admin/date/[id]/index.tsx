import { Alert } from "@/components/Alerts.tsx";
import {
  HandlerContext,
  Handlers,
  PageProps,
  RouteContext,
} from "$fresh/server.ts";
import prismaClient from "@/database/prisma.ts";
import { DateWithClientAndProperty } from "@/schema/date.ts";
import { z, ZodError } from "zod";
import AsignDateForm from "@/islands/dates/AsignDateForm.tsx";

export const handler: Handlers = {
  async GET(_req: Request, ctx: HandlerContext<{ errors: string }>) {
    return await ctx.render({
      errors: "",
    });
  },
  async POST(req: Request, ctx: HandlerContext<{ errors: string }>) {
    const formData = await req.formData();
    const date = formData.get("date")?.toString();

    try {
      const result = z.coerce.date({
        required_error: "La fecha es requerida",
        invalid_type_error: "La fecha debe ser una fecha",
      })
        .min(new Date(), {
          message: "La fecha debe ser mayor o igual a la fecha actual",
        })
        .parse(date);
      const updatedDate = await prismaClient.citas.update({
        data: {
          fech_cita: result,
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
      if (error instanceof ZodError) {
        return await ctx.render({
          errors: error.issues.map((issue) => issue.message).join(", "),
        });
      }
      return await ctx.render({
        errors: "Error al asignar fecha",
      });
    }
  },
};

export default async function AsignDatePage(req: Request, ctx: RouteContext) {
  const url = new URL(req.url);

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
