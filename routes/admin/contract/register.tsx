import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { Alert } from "@/components/Alerts.tsx";
import NewContractForm from "@/islands/contract/NewContractForm.tsx";
import prismaClient from "@/database/prisma.ts";

export const handler: Handlers<{ errors: string }> = {
  async GET(_req: Request, ctx: HandlerContext<{ errors: string }>) {
    return await ctx.render({
      errors: "",
    });
  },
  async POST(req: Request, ctx: HandlerContext<{ errors: string }>) {
    const formData = await req.formData();
    const url = new URL(req.url);

    const client = await prismaClient.clientes.findUnique({
      where: {
        num_cliente: Number(formData.get("clientId")?.toString()),
      },
    });

    const property = await prismaClient.inmueblesAlquiler.findUnique({
      where: {
        num_inmueble: Number(formData.get("propertyId")?.toString()),
      },
      select: {
        dir_inmueble: true,
        num_inmueble: true,
      },
    });

    if (property && client) {
      // FIXME: Vliadar cliente e inmueble, y modificar casos de uso
      await prismaClient.contratosAlquiler.create({
        data: {
          num_cliente: client?.num_cliente,
          nom_cliente: client?.nom_cliente,
          dir_cliente: formData.get("address")?.toString() ?? "",
          num_inmueble: property?.num_inmueble,
          dir_inmueble: property?.dir_inmueble,
          import_mensual: Number(formData.get("amount")?.toString()),
          mod_pago: formData.get("paymentMethod")?.toString() ?? "",
          dep_pago: formData.get("rentalDeposit")?.toString() ?? "",
          dur_contrato: Number(formData.get("months")?.toString()),
          fech_inicio: new Date(formData.get("startDate")!.toString()),
          fech_fin: new Date(formData.get("endDate")!.toString()),
        },
      });
      
      return new Response(null, {
        status: 303,
        headers: {
          "Location": "/admin/contract",
        },
      });
    }

    return ctx.render({
      errors: "Error al registrar contrato",
    });
  },
};

export default function RegisterContract(props: PageProps) {
  return (
    <div class="flex justify-center px-4">
      <div class="container flex flex-col gap-4 py-4 font-sans">
        {props.data.errors && <Alert message={props.data.errors} />}
        <span class="text-xl font-semibold">Registrar Contratos</span>
        <NewContractForm origin={props.url.origin} />
      </div>
    </div>
  );
}
