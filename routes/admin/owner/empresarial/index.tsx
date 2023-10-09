import { RouteContext } from "$fresh/server.ts";
import { PropietariosEmpresariales } from "@/generated/client/deno/edge.ts";
import ListOwners from "@/islands/owner/empresarial/ListOwners.tsx";
import { IconPlus } from "@tabler-icons";
import prismaClient from "@/database/prisma.ts";

export default async function EmpresarialOwnerPage(
  req: Request,
  _ctx: RouteContext,
) {
  const owners: PropietariosEmpresariales[] = await prismaClient
    .propietariosEmpresariales.findMany({
      take: 10,
    });

  const url = new URL(req.url);

  return (
    <div class="flex justify-center px-4">
      <div class="container flex flex-col gap-4 py-4 font-sans">
        <div class="flex flex-col md:flex-row gap-4 md:gap-2 md:items-center">
          <span class="text-4xl font-semibold">
            Propietarios Empresariales
          </span>
          <a
            href="/admin/owner/empresarial/register"
            class="btn btn-primary md:w-max btn-md md:btn-sm"
          >
            <IconPlus size="24" />
            Nuevo Propietario
          </a>
        </div>
        <ListOwners ownersList={owners} origin={url.origin} />
      </div>
    </div>
  );
}
