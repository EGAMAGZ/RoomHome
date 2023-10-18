import { Signal, useSignal, useSignalEffect } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { Clientes } from "@/generated/client/deno/edge.ts";
import { ApiResponse } from "@/schema/api-response.ts";
import Select from "@/islands/Select.tsx";

interface SelectClientProps {
  value: Signal<string>;
  errors: Signal<string>;
}

export default function SelectClient(
  { errors, value }: SelectClientProps,
) {
  const clients = useSignal<Clientes[]>([]);

  const isLoading = useSignal(false);

  useSignalEffect(() => {
    const fetchClients = async () => {
      const res = await fetch(`/api/auth/client`);
      const { data } = (await res.json()) as ApiResponse<Clientes[]>;
      if (res.status === 200) {
        clients.value = data;
      }

      isLoading.value = false;
    };

    isLoading.value = true;
    fetchClients();
  });

  return (
    <Select
      label="Cliente:"
      value={value}
      error={errors}
      defaultValue="Selecciona un cliente"
      name="num_cliente"
      disabled={isLoading.value}
      required
    >
      {clients.value.map((client) => (
        <option key={client.num_cliente} value={client.num_cliente}>
          {client.nom_cliente} ID: {client.num_cliente}
        </option>
      ))}
    </Select>
  );
}
