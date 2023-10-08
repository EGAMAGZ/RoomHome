import PropertyCard from "@/components/PropertyCard.tsx";
import { Signal, useSignal } from "@preact/signals";
import { InmueblesAlquiler } from "@/generated/client/deno/edge.ts";
import Button from "@/components/Button.tsx";
import { ApiResponse } from "@/model/api-response.ts";
import { IconCircleX, IconSearchOff } from "@tabler-icons";
import NoElementsCard from "@/components/NoElementsCard.tsx";

interface FilteredListPropertiesProps {
  properties: Signal<InmueblesAlquiler[]>;
  amount: number;
  rooms: number;
  origin: string;
}

export default function FilteredListProperties(
  { properties, amount, rooms }: FilteredListPropertiesProps,
) {
  const isLoading = useSignal(false);
  const skip = useSignal(0);
  const isMaxElements = useSignal(false);

  function handleClick(event: Event) {
    skip.value += 10;
    const loadProperties = async () => {
      const url = new URL(`${origin}/api/property/filter`);
      url.searchParams.append("skip", String(skip.value));
      url.searchParams.append("amount", String(amount));
      url.searchParams.append("rooms", String(rooms));

      const res = await fetch(url);

      const { data, message } = (await res.json()) as ApiResponse<
        InmueblesAlquiler[]
      >;

      if (res.status === 200) {
        if (data.length > 0) {
          properties.value = [...properties.value, ...data];
          skip.value += 10;
        } else {
          isMaxElements.value = true;
        }
      }
      isLoading.value = false;
    };

    isLoading.value = true;
    loadProperties();
  }

  return (
    <div class="flex flex-col gap-2">
      {properties.value.length > 0
        ? (
          <>
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
            <LoadMoreButton
              isMaxElements={isMaxElements.value}
              isLoading={isLoading.value}
              handleClick={handleClick}
            />
          </>
        )
        : (
          <>
            <NoElementsCard text="No se encontraron propiedades." />
          </>
        )}
    </div>
  );
}

interface LoadMoreButtonProps {
  isMaxElements: boolean;
  isLoading: boolean;
  handleClick: (event: Event) => void;
}

function LoadMoreButton(
  { isMaxElements, isLoading, handleClick }: LoadMoreButtonProps,
) {
  return (
    <>
      {isMaxElements
        ? (
          <>
            <div class="divider"></div>
            <NoElementsCard text="No se más encontraron propiedades." />
          </>
        )
        : (
          <Button
            type="button"
            state="primary"
            disabled={isLoading}
            loading={isLoading}
            onClick={handleClick}
          >
            <span>Cargar más</span>
          </Button>
        )}
    </>
  );
}
