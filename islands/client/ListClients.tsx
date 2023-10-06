import { Signal, useSignal, useSignalEffect } from "@preact/signals";
import { Clientes } from "@/generated/client/deno/edge.ts";
import { ApiResponse } from "@/model/api-response.ts";
import ClientItem from "@/components/client/ClientItem.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface ListClientsProps {
  clients: Signal<Clientes[]>;
  origin: string;
}

export default function ListClients(
  { clients, origin }: ListClientsProps,
) {
  const skip = useSignal(0);
  const isDisabled = useSignal(true);

  useSignalEffect(() => {
    const loadClients = async () => {
      const url = new URL(`${origin}/api/auth/client`);
      url.searchParams.append("skip", String(skip.peek()));

      const res = await fetch(url);

      const { data, message } = (await res.json()) as ApiResponse<Clientes[]>;

      if (res.status === 200) {
        clients.value = data;
        skip.value += 10;
      }
      isDisabled.value = false;
    };

    isDisabled.value = true;
    loadClients();
  });

  async function handleClick() {
    isDisabled.value = true;
    const url = new URL(`${origin}/api/auth/client`);
    url.searchParams.append("skip", String(skip.value));
    const res = await fetch(url);

    if (res.status === 200) {
      const { data } = (await res.json()) as ApiResponse<Clientes[]>;
      clients.value = [...clients.value, ...data];

      skip.value += 10;
    }
    isDisabled.value = false;
  }

  return (
    <div class="flex flex-col">
      <div class="flex flex-col gap-2">
        {clients.value.map((client: Clientes) => (
          <ClientItem
            id={client.num_cliente}
            name={client.nom_cliente}
            email={client.email_cliente}
            phone={client.tel_cliente}
          />
        ))}
      </div>
      <button
        type="button"
        disabled={!IS_BROWSER || isDisabled.value}
        onClick={handleClick}
      >
        Cargar más
      </button>
    </div>
  );
}
