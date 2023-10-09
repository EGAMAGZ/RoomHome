import { Signal, useSignalEffect } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";
import {
  InmueblesAlquiler,
  PropietariosEmpresariales,
} from "@/generated/client/deno/edge.ts";
import { useSignal } from "@preact/signals";
import { ApiResponse } from "@/model/api-response.ts";

interface SelectPropertyProps {
  origin: string;
  value: Signal<string>;
  onChange: (value: string) => void;
  errors: Signal<string>;
}

export default function SelectProperty({
  errors,
  onChange,
  value,
  origin,
}: SelectPropertyProps) {
  const properties = useSignal<InmueblesAlquiler[]>([]);

  useSignalEffect(() => {
    const fetchProperties = async () => {
      const res = await fetch(`${origin}/api/property/all`);

      const { data } = (await res.json()) as ApiResponse<
        InmueblesAlquiler[]
      >;

      if (res.status === 200) {
        properties.value = data;
      }
    };
    fetchProperties();
  });

  return (
    <select
      name="propertyId"
      value={value}
      onChange={(e) => onChange((e.target as HTMLSelectElement).value)}
      class={`select select-bordered w-full ${
        errors.value ? "select-error" : "select-primary"
      }`}
      disabled={!IS_BROWSER}
      required
    >
      <option value="">Selecciona una propiedad</option>
      {properties.value.map((property) => (
        <option key={property.num_propietario} value={property.num_inmueble}>
          {property.dir_inmueble} ID: {property.num_inmueble}
        </option>
      ))}
    </select>
  );
}
