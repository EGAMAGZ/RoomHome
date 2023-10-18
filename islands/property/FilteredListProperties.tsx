import PropertyCard from "@/components/property/PropertyCard.tsx";
import { Signal, useComputed, useSignal } from "@preact/signals";
import { InmueblesAlquiler } from "@/generated/client/deno/edge.ts";
import Button from "@/components/Button.tsx";
import { ApiResponse } from "@/schema/api-response.ts";
import NoElementsCard from "@/components/NoElementsCard.tsx";

interface FilteredListPropertiesProps {
  properties: Signal<InmueblesAlquiler[]>;
  amount: number;
  rooms: number;
}

export default function FilteredListProperties(
  { properties, amount, rooms }: FilteredListPropertiesProps,
) {
  const isLoading = useSignal(false);
  const skip = useSignal(0);
  const isMaxElements = useSignal(false);
  const showButton = useComputed(() =>
    properties.value.length >= 10 && !(isMaxElements.value)
  );

  function handleClick(event: Event) {
    const loadProperties = async () => {
      const searchParams = new URLSearchParams();
      searchParams.append("skip", String(skip.value));
      searchParams.append("amount", String(amount));
      searchParams.append("rooms", String(rooms));

      const url = `/api/property/filter?${String(searchParams)}`;

      const res = await fetch(url);

      const { data, message } = (await res.json()) as ApiResponse<
        InmueblesAlquiler[]
      >;

      if (res.status === 200) {
        isMaxElements.value = data.length < 10;
        if (data.length > 0) {
          properties.value = [...properties.value, ...data];
          skip.value += 10;
        }
      }
      isLoading.value = false;
    };

    skip.value += 10;
    isLoading.value = true;
    loadProperties();
  }

  return (
    <div class="flex flex-col gap-2">
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {properties.value.map((property: InmueblesAlquiler) => (
          <PropertyCard
            id={property.num_inmueble}
            address={property.dir_inmueble}
            amount={property.import_mensual}
            rooms={property.num_habitaciones}
            type={property.tipo_inmueble}
          />
        ))}
      </div>
      {showButton.value && (
        <Button
          type="button"
          state="primary"
          disabled={isLoading.value}
          loading={isLoading.value}
          onClick={handleClick}
        >
          <span>Cargar más</span>
        </Button>
      )}
    </div>
  );
}
