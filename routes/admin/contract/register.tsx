import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { Alert } from "@/components/Alerts.tsx";
import NewContractForm from "@/islands/contract/NewContractForm.tsx";
import prismaClient from "@/database/prisma.ts";
import { Data } from "@/schema/data.ts";
import SessionState from "@/schema/session-state.ts";
import { RegisterContractSchema } from "@/schema/contract.ts";
import { z } from "zod";
import { totalMonths } from "@/utils/date.ts";

export const handler: Handlers<Data, SessionState> = {
  async GET(_req: Request, ctx: HandlerContext<Data, SessionState>) {
    return await ctx.render({
      error: "",
    });
  },
  async POST(req: Request, ctx: HandlerContext<Data, SessionState>) {
    const formData = await req.formData();
    try {
      const {
        num_cliente,
        num_inmueble,
        mod_pago,
        fech_inicio,
        fech_fin,
        dep_pago,
      } = RegisterContractSchema.parse(
        Object.fromEntries(formData.entries()),
      );

      const dur_contrato = totalMonths(fech_inicio, fech_fin);

      await prismaClient.contratosAlquiler.create({
        data: {
          num_cliente,
          num_inmueble,
          mod_pago,
          fech_inicio,
          fech_fin,
          dep_pago,
          dur_contrato,
        },
      });
      return new Response(null, {
        status: 303,
        headers: {
          "Location": "/admin/contract",
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

export default function RegisterContract(props: PageProps) {
  return (
    <div class="flex justify-center px-4">
      <div class="container flex flex-col gap-4 py-4 font-sans">
        {props.data.error && <Alert message={props.data.error} />}
        <span class="text-4xl font-semibold">Registrar Contratos</span>
        <NewContractForm />
      </div>
    </div>
  );
}
