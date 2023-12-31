import { Signal, useSignalEffect } from "@preact/signals";
import { InmueblesAlquiler } from "@/generated/client/deno/edge.ts";
import { useSignal } from "@preact/signals";
import { ApiResponse } from "@/schema/api-response.ts";
import Select from "@/islands/Select.tsx";

interface SelectPropertyProps {
  value: Signal<string>;
  importMensual: Signal<number>;
  errors: Signal<string>;
}

export default function SelectProperty({
  errors,
  value,
  importMensual,
}: SelectPropertyProps) {
  const properties = useSignal<InmueblesAlquiler[]>([]);

  const isLoading = useSignal(false);

  useSignalEffect(() => {
    const fetchProperties = async () => {
      const res = await fetch("/api/property/available");

      const { data } = (await res.json()) as ApiResponse<
        InmueblesAlquiler[]
      >;

      if (res.status === 200) {
        properties.value = data;
      }
      isLoading.value = false;
    };
    isLoading.value = true;
    fetchProperties();
  });

  useSignalEffect(() => {
    importMensual.value = properties.value
      .find((p) => p.num_inmueble === Number(value.value))
      ?.import_mensual ?? 0;
  });

  return (
    <>
      <Select
        defaultValue="Selecciona un inmueble"
        label="Inmueble:"
        error={errors}
        value={value}
        name="num_inmueble"
        disabled={isLoading.value}
        required
      >
        {properties.value.map((property) => (
          <option
            key={property.num_inmueble}
            value={property.num_inmueble}
          >
            {property.dir_inmueble} ID: {property.num_inmueble}
          </option>
        ))}
      </Select>
    </>
  );
}
