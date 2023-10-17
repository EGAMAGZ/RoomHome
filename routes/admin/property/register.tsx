import NewPropertyForm from "@/islands/property/NewProperty.tsx";
import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { ApiResponse } from "@/schema/api-response.ts";
import { InmueblesAlquiler } from "@/generated/client/deno/edge.ts";
import { Alert } from "@/components/Alerts.tsx";
import { Data } from "@/schema/data.ts";
import SessionState from "@/schema/session-state.ts";
import { RegisterPropertySchema } from "@/schema/property.ts";
import prismaClient from "@/database/prisma.ts";
import { z } from "zod";

export const handler: Handlers<Data, SessionState> = {
  async GET(_req: Request, ctx: HandlerContext<Data, SessionState>) {
    return await ctx.render({
      error: "",
    });
  },
  async POST(req: Request, ctx: HandlerContext<Data, SessionState>) {
    const formData = await req.formData();
    try {
      const result = RegisterPropertySchema.parse(
        Object.fromEntries(formData.entries()),
      );

      await prismaClient.inmueblesAlquiler.create({
        data: {
          dir_inmueble: result.dir_inmueble,
          tipo_inmueble: result.tipo_inmueble,
          num_habitaciones: result.num_habitaciones,
          import_mensual: result.import_mensual,
          num_propietario: result.num_propietario,
          num_propietario_emp: result.num_propietario_emp,
        },
      });

      return new Response(null, {
        status: 303,
        headers: {
          Location: "/admin/property",
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

export default function RegisterProperty(props: PageProps) {
  return (
    <div class="flex justify-center px-4">
      <div class="container flex flex-col gap-4 py-4 font-sans">
        {props.data.error && <Alert message={props.data.error} />}
        <span class="text-4xl font-semibold">Registrar Propiedades</span>
        <NewPropertyForm />
      </div>
    </div>
  );
}
