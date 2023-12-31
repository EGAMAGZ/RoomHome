import { RouteContext } from "$fresh/server.ts";
import ListProperties from "@/islands/property/ListProperties.tsx";
import { IconPlus } from "@tabler-icons";
import prismaClient from "@/database/prisma.ts";
import { InmueblesAlquilerWithPropietary } from "@/schema/property.ts";

export default async function PropertyPage(_req: Request, _ctx: RouteContext) {
  const properties: InmueblesAlquilerWithPropietary[] = await prismaClient
    .inmueblesAlquiler
    .findMany({
      take: 10,
      include: {
        propietarioEmpresarial: {
          select: {
            nom_empresa: true,
          },
        },
        propietarioPrivado: {
          select: {
            nom_propietario: true,
          },
        },
      },
    });

  return (
    <div class="flex justify-center px-4">
      <div class="container flex flex-col gap-4 py-4 font-sans">
        <div class="flex flex-col md:flex-row gap-4 md:gap-2 md:items-center">
          <span class="text-4xl font-semibold">
            Inmuebles
          </span>
          <a
            href="/admin/property/register"
            class="btn btn-primary md:w-max btn-md md:btn-sm"
          >
            <IconPlus size="24" />
            Nuevo Inmueble
          </a>
        </div>
        <ListProperties propertiesList={properties} />
      </div>
    </div>
  );
}
