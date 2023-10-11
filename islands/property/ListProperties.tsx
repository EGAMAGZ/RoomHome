import { useSignal } from "@preact/signals";
import { ApiResponse } from "@/schema/api-response.ts";
import { InmueblesAlquilerWithPropietary } from "@/schema/property.ts";
import Button from "@/components/Button.tsx";
import { PropertyTable } from "@/components/property/PropertyTable.tsx";

interface ListPropertiesProps {
  propertiesList: InmueblesAlquilerWithPropietary[];
  origin: string;
}

export default function ListProperties(
  { propertiesList, origin }: ListPropertiesProps,
) {
  const properties = useSignal<InmueblesAlquilerWithPropietary[]>(
    propertiesList,
  );
  const skip = useSignal(0);
  const isLoading = useSignal(false);
  const isMaxElements = useSignal(false);

  function handleClick() {
    const loadProperties = async () => {
      const url = new URL(`${origin}/api/property`);
      url.searchParams.append("skip", String(skip.value));
      const res = await fetch(url);

      const { data } = (await res.json()) as ApiResponse<
        InmueblesAlquilerWithPropietary[]
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

    skip.value += 10;
    isLoading.value = true;
    loadProperties();
  }

  return (
    <div class="flex flex-col">
      <PropertyTable properties={properties} />
      {!isMaxElements.value && (
        <Button
          type="button"
          state="secondary"
          loading={isLoading.value}
          disabled={isLoading.value}
          onClick={handleClick}
        >
          <span>Cargar más</span>
        </Button>
      )}
    </div>
  );
}
