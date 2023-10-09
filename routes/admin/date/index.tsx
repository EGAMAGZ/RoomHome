import { RouteContext } from "$fresh/server.ts";
import prismaClient from "@/database/prisma.ts";
import { DateWithClientAndProperty } from "@/model/date.ts";
import LisDates from "@/islands/dates/ListDates.tsx";

export default async function DatePage(_req: Request, ctx: RouteContext) {
  const dates: DateWithClientAndProperty[] = await prismaClient.citas.findMany({
    include: {
      inmueble: true,
      cliente: true,
    },
  });
  return (
    <div class="flex justify-center px-4">
      <div class="container flex flex-col gap-4 py-4 font-sans">
        <span class="text-4xl font-semibold">Listado de Citas</span>
        <LisDates datesList={dates} origin={ctx.url.origin} />
      </div>
    </div>
  );
}
