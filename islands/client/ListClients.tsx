import { useComputed, useSignal } from "@preact/signals";
import { Clientes } from "@/generated/client/deno/edge.ts";
import { ApiResponse } from "@/schema/api-response.ts";
import Button from "@/components/Button.tsx";
import { ClientsTable } from "@/components/client/ClientsTable.tsx";

interface ListClientsProps {
  clientsList: Clientes[];
}

export default function ListClients(
  { clientsList }: ListClientsProps,
) {
  const clients = useSignal<Clientes[]>(clientsList);
  const skip = useSignal(0);
  const isLoading = useSignal(false);
  const isMaxElements = useSignal(false);
  const showButton = useComputed(() =>
    clients.value.length >= 10 && !(isMaxElements.value)
  );

  function handlerClick() {
    const loadClients = async () => {
      const searchParams = new URLSearchParams();
      searchParams.append("skip", String(skip.value));

      const url = `/api/auth/client?${String(searchParams)}`;
      const res = await fetch(url);

      const { data } = (await res.json()) as ApiResponse<Clientes[]>;
      if (res.status === 200) {
        isMaxElements.value = data.length < 10;
        if (data.length > 0) {
          clients.value = [...clients.value, ...data];
          skip.value += 10;
        }
      }
      isLoading.value = false;
    };

    skip.value += 10;
    isLoading.value = true;
    loadClients();
  }

  return (
    <div class="flex flex-col gap-2">
      <ClientsTable clients={clients} />
      {showButton.value && (
        <Button
          type="button"
          state="secondary"
          loading={isLoading.value}
          disabled={isLoading.value}
          onClick={handlerClick}
        >
          <span>Cargar más</span>
        </Button>
      )}
    </div>
  );
}
