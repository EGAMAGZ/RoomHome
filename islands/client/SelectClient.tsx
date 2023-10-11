import { Signal, useSignal, useSignalEffect } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { Clientes } from "@/generated/client/deno/edge.ts";
import { ApiResponse } from "@/schema/api-response.ts";

interface SelectClientProps {
  origin: string;
  value: Signal<string>;
  onChange: (value: string) => void;
  errors: Signal<string>;
}

export default function SelectClient(
  { errors, onChange, value, origin }: SelectClientProps,
) {
  const clients = useSignal<Clientes[]>([]);

  useSignalEffect(() => {
    const fetchClients = async () => {
      const res = await fetch(`${origin}/api/auth/client`);
      const { data } = (await res.json()) as ApiResponse<Clientes[]>;
      if (res.status === 200) {
        clients.value = data;
      }
    };
    fetchClients();
  });

  return (
    <select
      name="clientId"
      value={value}
      onChange={(e) => onChange((e.target as HTMLSelectElement).value)}
      class={`select select-bordered w-full ${
        errors.value ? "select-error" : "select-primary"
      }`}
      disabled={!IS_BROWSER}
      required
    >
      <option value="">Selecciona un cliente</option>
      {clients.value.map((client) => (
        <option key={client.num_cliente} value={client.num_cliente}>
          {client.nom_cliente} ID: {client.num_cliente}
        </option>
      ))}
    </select>
  );
}
