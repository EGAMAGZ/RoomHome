import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import prismaClient from "@/database/prisma.ts";
import { InmueblesAlquiler } from "@/generated/client/deno/edge.ts";
import { PropertyFilterFormSchema } from "@/schema/property.ts";
import { useSignal } from "@preact/signals";
import SearchPropertiesForm from "@/islands/property/SearchPropertiesForm.tsx";
import FilteredListProperties from "@/islands/property/FilteredListProperties.tsx";
import NoElementsCard from "@/components/NoElementsCard.tsx";
import SessionState from "@/schema/session-state.ts";
import { Data, SearchPropertyData } from "@/schema/data.ts";

export const handler: Handlers<
  Data<SearchPropertyData>,
  SessionState
> = {
  async GET(
    _req: Request,
    ctx: HandlerContext<
      Data<SearchPropertyData>,
      SessionState
    >,
  ) {
    const properties: InmueblesAlquiler[] = await prismaClient.inmueblesAlquiler
      .findMany({
        take: 10,
        where: {
          num_habitaciones: {
            gte: 1,
          },
          import_mensual: {
            lte: 1000,
          },
          ContratosAlquiler: null,
        },
      });

    return await ctx.render({
      error: "",
      properties,
      amount: 1000,
      rooms: 1,
    });
  },
  async POST(
    req: Request,
    ctx: HandlerContext<
      Data<SearchPropertyData>,
      SessionState
    >,
  ) {
    const formData = await req.formData();

    try {
      const { amount, rooms } = PropertyFilterFormSchema.parse({
        amount: formData.get("amount")?.toString(),
        rooms: formData.get("rooms")?.toString(),
      });
      const properties = await prismaClient.inmueblesAlquiler.findMany({
        take: 10,
        where: {
          num_habitaciones: {
            gte: rooms,
          },
          import_mensual: {
            lte: amount,
          },
          ContratosAlquiler: null,
        },
      });

      return await ctx.render({
        error: "",
        properties,
        amount,
        rooms,
      });
    } catch (error) {
      return await ctx.render({
        error: error,
        properties: [],
        amount: 1000,
        rooms: 1,
      });
    }
  },
};

export default function PropertiesPage(
  { data }: PageProps<
    Data<SearchPropertyData>,
    SessionState
  >,
) {
  const properties = useSignal<InmueblesAlquiler[]>(
    data.properties,
  );
  const amount = useSignal(data.amount);
  const rooms = useSignal(data.rooms);

  return (
    <>
      <div class="bg-gray-400 text-center font-sans font-semibold py-2">
        <h1 class="text-2xl">Tu nuevo hogar al alcance de un click</h1>
      </div>

      <div class="flex flex-col md:flex-row">
        <div class="flex-1 p-4">
          <SearchPropertiesForm
            price={amount}
            rooms={rooms}
          />
        </div>
        <div class="flex-[3] p-4">
          {properties.value.length > 0
            ? (
              <FilteredListProperties
                properties={properties}
                amount={data.amount}
                rooms={data.rooms}
              />
            )
            : <NoElementsCard text="No se encontraron propiedades." />}
        </div>
      </div>
    </>
  );
}
