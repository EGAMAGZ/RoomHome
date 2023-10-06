import { Signal, useSignal, useSignalEffect } from "@preact/signals";
import { InmueblesAlquiler, Prisma } from "@/generated/client/deno/edge.ts";
import PropertyItem from "@/components/property/PropertyItem.tsx";
import { ApiResponse } from "@/model/api-response.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface ListPropertiesProps {
  properties: Signal<InmueblesAlquiler[]>;
  origin: string;
}

export default function ListProperties(
  { properties, origin }: ListPropertiesProps,
) {
  const skip = useSignal(0);
  const isDisabled = useSignal(true);

  useSignalEffect(() => {
    const loadProperties = async () => {
      const url = new URL(`${origin}/api/property`);
      url.searchParams.append("skip", String(skip.peek()));
      const res = await fetch(url);

      const { data, message } = (await res.json()) as ApiResponse<
        InmueblesAlquiler[]
      >;

      if (res.status === 200) {
        properties.value = data;
        skip.value += 10;
      }
      isDisabled.value = false;
    };

    isDisabled.value = true;
    loadProperties();
  });
  async function handleClick() {
    isDisabled.value = true;
    const url = new URL(`${origin}/api/property`);
    url.searchParams.append("skip", String(skip.value));
    const res = await fetch(url);

    if (res.status === 200) {
      const { data } = (await res.json()) as ApiResponse<InmueblesAlquiler[]>;
      properties.value = [...properties.value, ...data];

      skip.value += 10;
    }
    isDisabled.value = false;
  }

  return (
    <div class="flex flex-col">
      <div class="flex flex-col gap-2">
        {properties.value.map((property: InmueblesAlquiler) => (
          <PropertyItem
            id={property.num_inmueble}
            address={property.dir_inmueble}
            type={property.tipo_inmueble}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={handleClick}
        disabled={!IS_BROWSER || isDisabled.value}
      >
        Mostrar mas
      </button>
    </div>
  );
}
