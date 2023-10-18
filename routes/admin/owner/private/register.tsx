import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { Alert } from "@/components/Alerts.tsx";
import NewOwnerForm from "@/islands/owner/private/NewOwnerForm.tsx";
import { Data } from "@/schema/data.ts";
import SessionState from "@/schema/session-state.ts";
import { RegisterPrivateOwnerSchema } from "@/schema/private-owner.ts";
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
      const { dir_propietario, nom_propietario, tel_propietario } =
        RegisterPrivateOwnerSchema.parse(
          Object.fromEntries(formData.entries()),
        );
      await prismaClient.propietariosPrivados.create({
        data: {
          dir_propietario,
          nom_propietario,
          tel_propietario,
        },
      });

      return new Response(null, {
        status: 303,
        headers: {
          Location: "/admin/owner/private",
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
        <span class="text-xl font-semibold">
          Registrar Propietarios Privados
        </span>
        <NewOwnerForm />
      </div>
    </div>
  );
}
