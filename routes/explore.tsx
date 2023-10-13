import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import prismaClient from "@/database/prisma.ts";
import { InmueblesAlquiler } from "@/generated/client/deno/edge.ts";
import { PropertyFilterFormSchema } from "@/schema/property.ts";
import { useSignal } from "@preact/signals";
import SearchPropertiesForm from "@/islands/property/SearchPropertiesForm.tsx";
import FilteredListProperties from "@/islands/property/FilteredListProperties.tsx";

export const handler: Handlers<
  {
    errors: string;
    properties: InmueblesAlquiler[];
    amount: number;
    rooms: number;
  }
> = {
  async GET(
    _req: Request,
    ctx: HandlerContext<
      {
        errors: string;
        properties: InmueblesAlquiler[];
        amount: number;
        rooms: number;
      }
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
            gte: 1000,
          },
        },
      });

    return await ctx.render({
      errors: "",
      properties,
      amount: 1000,
      rooms: 1,
    });
  },
  async POST(
    req: Request,
    ctx: HandlerContext<
      {
        errors: string;
        properties: InmueblesAlquiler[];
        amount: number;
        rooms: number;
      }
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
            gte: amount,
          },
        },
      });

      return await ctx.render({
        errors: "",
        properties,
        amount,
        rooms,
      });
    } catch (error) {
      return await ctx.render({
        errors: error,
        properties: [],
        amount: 1000,
        rooms: 1,
      });
    }
  },
};

export default function ExplorePage(
  { data, url }: PageProps<
    {
      errors: string;
      properties: InmueblesAlquiler[];
      amount: number;
      rooms: number;
    }
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
          <FilteredListProperties
            properties={properties}
            amount={data.amount}
            rooms={data.rooms}
            origin={url.origin}
          />
        </div>
      </div>
    </>
  );
}
