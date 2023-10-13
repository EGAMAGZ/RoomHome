import SessionState from "@/schema/session-state.ts";
import { RouteContext } from "$fresh/server.ts";
import prismaClient from "@/database/prisma.ts";
import { Citas } from "@/generated/client/deno/edge.ts";
import DateCard from "@/components/date/DateCard.tsx";
import EmptyCard from "@/components/NoElementsCard.tsx";

export default async function DetailsPropertyPage(
  _req: Request,
  ctx: RouteContext<any, SessionState>,
) {
  const dates = await prismaClient.citas.findMany({
    where: {
      num_cliente: ctx.state._id,
    },
    include: {
      inmueble: true,
    },
  });

  return (
    <div class="flex justify-center px-4">
      <div class="container flex flex-col gap-4 py-4 font-sans">
        <span class="text-4xl font-semibold">Listado de citas</span>

        {dates.length > 0
          ? (
            <div class="flex flex-col gap-2">
              {dates.map((date) => <DateCard date={date} />)}
            </div>
          )
          : <EmptyCard text="No hay solicitudes de citas de momento." />}
      </div>
    </div>
  );
}
