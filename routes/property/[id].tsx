import { RouteContext } from "$fresh/server.ts";
import SessionState from "@/model/session-state.ts";
import prismaClient from "@/database/prisma.ts";
import { z } from "zod";
import {
  EmpresarialOwnerCard,
  PrivateOwnerCard,
} from "@/components/owner/OwnerCards.tsx";
import RequestDateButton from "@/islands/dates/RequestDateButton.tsx";

export default async function DetailsPropertyPage(
  req: Request,
  ctx: RouteContext<any, SessionState>,
) {
  const url = new URL(req.url);

  try {
    const num_inmueble = z.coerce.number().parse(ctx.params.id);
  } catch (_error) {
    return await ctx.renderNotFound();
  }

  const date: { num_cita: number } | null = await prismaClient.citas.findFirst({
    where: {
      num_cliente: ctx.state._id,
      AND: {
        num_inmueble: Number(ctx.params.id),
      },
    },
    select: {
      num_cita: true,
    },
  });

  const property = await prismaClient.inmueblesAlquiler.findUnique({
    where: {
      num_inmueble: Number(ctx.params.id),
    },
    include: {
      propietarioEmpresarial: true,
      propietarioPrivado: true,
    },
  });

  if (property === null) {
    return await ctx.renderNotFound();
  }

  return (
    <>
      <div class="bg-gray-400 text-center font-sans font-semibold py-2">
        <h1 class="text-2xl">Tu nuevo hogar al alcance de un click</h1>
      </div>
      <div class="flex justify-center py-4">
        <div class="container flex flex-col px-4 gap-4">
          <div class="card bg-neutral-300 shadow font-sans">
            <figure>
              <img
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt={property?.tipo_inmueble}
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">
                <div class="flex justify-between w-full">
                  <span>
                    Información del lugar
                  </span>
                  <span class="text-2xl font-bold font-mono">
                    ${new Intl.NumberFormat().format(
                      property?.import_mensual,
                    )}
                  </span>
                </div>
              </h2>
              <div class="flex flex-col">
                <p>
                  <span class="font-semibold mr-2">
                    Tipo de inmueble:
                  </span>
                  {property?.tipo_inmueble}
                </p>
                <p>
                  <span class="font-semibold mr-2">
                    Dirección:
                  </span>
                  {property?.dir_inmueble}
                </p>
                <p>
                  <span class="font-semibold mr-2">
                    Numero de habitaciones:
                  </span>
                  {property?.num_habitaciones}
                </p>
              </div>
              <div class="card-actions justify-end">
                <RequestDateButton
                  date={date}
                  userId={ctx.state._id}
                  propertyId={property?.num_inmueble}
                  origin={url.origin}
                />
              </div>
            </div>
          </div>
          {property?.propietarioEmpresarial && (
            <EmpresarialOwnerCard
              owner={property?.propietarioEmpresarial}
            />
          )}

          {property?.propietarioPrivado && (
            <PrivateOwnerCard
              owner={property?.propietarioPrivado}
            />
          )}
        </div>
      </div>
    </>
  );
}
