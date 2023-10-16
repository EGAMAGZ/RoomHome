import NewClientForm from "@/islands/client/NewClientForm.tsx";
import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { Alert } from "@/components/Alerts.tsx";
import { Clientes } from "@/generated/client/deno/edge.ts";
import { ApiResponse } from "@/schema/api-response.ts";
import SessionState from "@/schema/session-state.ts";
import { Data } from "@/schema/data.ts";
import { z } from "zod";
import { RegisterClientSchema } from "@/schema/client.ts";
import prismaClient from "@/database/prisma.ts";

export const handler: Handlers<Data, SessionState> = {
  async GET(_req: Request, ctx: HandlerContext<Data, SessionState>) {
    return await ctx.render({
      error: "",
    });
  },

  async POST(req: Request, ctx: HandlerContext<Data, SessionState>) {
    const formData = await req.formData();
    try {
      const result = RegisterClientSchema.parse(
        Object.fromEntries(formData.entries()),
      );

      await prismaClient.clientes.create({
        data: {
          nom_cliente: result.nom_cliente,
          tel_cliente: result.tel_cliente,
          tipo_inmueble: result.tipo_inmueble,
          importmax_inmueble: result.importmax_inmueble,
          sucregistro_cliente: result.sucregistro_cliente,
          email_cliente: result.email_cliente,
          pass_cliente: result.pass_cliente,
          nom_empleado: ctx.state.name,
        },
      });

      return new Response(null, {
        status: 303,
        headers: {
          Location: "/admin/client",
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

export default function RegisterClientPage(props: PageProps) {
  return (
    <div class="flex justify-center px-4">
      <div class="container flex flex-col gap-4 py-4 font-sans">
        {props.data.error && <Alert message={props.data.error} />}
        <span class="text-4xl font-semibold">Registrar Clientes</span>
        <NewClientForm />
      </div>
    </div>
  );
}
