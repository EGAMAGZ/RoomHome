import ListOwners from "@/islands/owner/private/ListOwners.tsx";
import { PropietariosPrivados } from "@/generated/client/deno/edge.ts";
import { useSignal } from "@preact/signals";
import { PageProps, RouteContext } from "$fresh/server.ts";
import prismaClient from "@/database/prisma.ts";
import { IconPlus } from "@tabler-icons";

export default async function PrivateOwnerPage(
  _req: Request,
  _ctx: RouteContext,
) {
  const owners: PropietariosPrivados[] = await prismaClient.propietariosPrivados
    .findMany({
      take: 10,
    });

  return (
    <div class="flex justify-center px-4">
      <div class="container flex flex-col gap-4 py-4 font-sans">
        <div class="flex flex-col md:flex-row gap-4 md:gap-2 md:items-center">
          <span class="text-4xl font-semibold">
            Propietarios Privados
          </span>
          <a
            href="/admin/owner/private/register"
            class="btn btn-primary md:w-max btn-md md:btn-sm"
          >
            <IconPlus size="24" />
            Nuevo Propietario
          </a>
        </div>
        <ListOwners ownersList={owners} />
      </div>
    </div>
  );
}
