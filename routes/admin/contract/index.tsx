import { RouteContext } from "$fresh/server.ts";
import prismaClient from "@/database/prisma.ts";
import { IconPlus } from "@tabler-icons";
import ListContracts from "@/islands/contract/ListContracts.tsx";
import { ContractWithClientAndProperty } from "@/schema/contract.ts";

export default async function ContractPage(req: Request, ctx: RouteContext) {
  const contracts: ContractWithClientAndProperty[] = await prismaClient.contratosAlquiler
    .findMany({
      take: 10,
      include: {
        cliente: true,
        inmueble: true,
      },
    });

  return (
    <div class="flex justify-center px-4">
      <div class="container flex flex-col gap-4 py-4 font-sans">
        <div class="flex flex-col md:flex-row gap-4 md:gap-2 md:items-center">
          <span class="text-4xl font-semibold">Contratos</span>
          <a
            href="/admin/contract/register"
            class="btn btn-primary md:w-max btn-md md:btn-sm"
          >
            <IconPlus size="24" />
            Nuevo Contrato
          </a>
        </div>
        <ListContracts contractsList={contracts} />
      </div>
    </div>
  );
}
