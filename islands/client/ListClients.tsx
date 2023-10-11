import { useSignal } from "@preact/signals";
import { Clientes } from "@/generated/client/deno/edge.ts";
import { ApiResponse } from "@/schema/api-response.ts";
import Button from "@/components/Button.tsx";
import { ClientsTable } from "@/components/client/ClientsTable.tsx";

interface ListClientsProps {
  clientsList: Clientes[];
  origin: string;
}

export default function ListClients(
  { clientsList, origin }: ListClientsProps,
) {
  const clients = useSignal<Clientes[]>(clientsList);
  const skip = useSignal(0);
  const isLoading = useSignal(false);
  const isMaxElements = useSignal(false);

  function handlerClick() {
    skip.value += 10;
    const loadClients = async () => {
      const url = new URL(`${origin}/api/auth/client`);
      url.searchParams.append("skip", String(skip.value));

      const res = await fetch(url);

      const { data } = (await res.json()) as ApiResponse<Clientes[]>;
      if (res.status === 200) {
        if (data.length > 0) {
          clients.value = [...clients.value, ...data];
          skip.value += 10;
        } else {
          isMaxElements.value = true;
        }
      }
      isLoading.value = false;
    };
    isLoading.value = true;
    loadClients();
  }

  return (
    <div class="flex flex-col gap-2">
      <ClientsTable clients={clients} />
      {!isMaxElements.value && (
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
