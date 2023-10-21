import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { Alert } from "@/components/Alerts.tsx";
import NewOwnerForm from "@/islands/owner/empresarial/NewOwnerForm.tsx";
import { RegisterEmpresarialOwnerSchema } from "@/schema/empresarial-owner.ts";
import prismaClient from "@/database/prisma.ts";
import { z } from "zod";
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
      const result = RegisterEmpresarialOwnerSchema.parse(
        Object.fromEntries(formData.entries()),
      );
      await prismaClient.propietariosEmpresariales.create({
        data: {
          nom_empresa: result.nom_empresa,
          tipo_empresa: result.tipo_empresa,
          dir_empresa: result.dir_empresa,
          tel_empresa: result.tel_empresa,
          nom_contacto: result.nom_contacto,
        },
      });

      return new Response(null, {
        status: 303,
        headers: {
          Location: "/admin/owner/empresarial",
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

export default function RegisterOwnerPage(props: PageProps) {
  return (
    <div class="flex justify-center px-4">
      <div class="container flex flex-col gap-4 py-4 font-sans">
        {props.data.error && <Alert message={props.data.error} />}
        <span class="text-4xl font-semibold">
          Registrar Propietarios Empresariales
        </span>
        <NewOwnerForm />
      </div>
    </div>
  );
}
