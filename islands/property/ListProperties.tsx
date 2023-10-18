import { useComputed, useSignal } from "@preact/signals";
import { ApiResponse } from "@/schema/api-response.ts";
import { InmueblesAlquilerWithPropietary } from "@/schema/property.ts";
import Button from "@/components/Button.tsx";
import { PropertyTable } from "@/components/property/PropertyTable.tsx";

interface ListPropertiesProps {
  propertiesList: InmueblesAlquilerWithPropietary[];
}

export default function ListProperties(
  { propertiesList }: ListPropertiesProps,
) {
  const properties = useSignal<InmueblesAlquilerWithPropietary[]>(
    propertiesList,
  );
  const skip = useSignal(0);
  const isLoading = useSignal(false);
  const isMaxElements = useSignal(false);

  const showButton = useComputed(() =>
    properties.value.length >= 10 && !(isMaxElements.value)
  );

  function handleClick() {
    const loadProperties = async () => {
      const searchParams = new URLSearchParams();
      searchParams.append("skip", String(skip.value));

      const url = `/api/property?${String(searchParams)}`;
      const res = await fetch(url);

      const { data } = (await res.json()) as ApiResponse<
        InmueblesAlquilerWithPropietary[]
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
    <div class="flex flex-col">
      <PropertyTable properties={properties} />
      {showButton.value && (
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
