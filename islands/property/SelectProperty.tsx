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
      const res = await fetch(`${origin}/api/property/all`);

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
            key={property.num_propietario}
            value={property.num_inmueble}
            onClick={() => importMensual.value = property.import_mensual}
          >
            {property.dir_inmueble} ID: {property.num_inmueble}
          </option>
        ))}
      </Select>
    </>
  );
}
