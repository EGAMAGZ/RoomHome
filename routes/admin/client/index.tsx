import { PageProps } from "$fresh/server.ts";
import ListClients from "@/islands/client/ListClients.tsx";
import { Clientes } from "@/generated/client/deno/edge.ts";
import { useSignal } from "@preact/signals";

export default function ClientPage(props: PageProps) {
  const clients = useSignal<Clientes[]>([]);

  return (
    <div>
      <h1>Clientes</h1>
      <a href="/admin/client/register">
        Nuevo Cliente
      </a>
      <ListClients clients={clients} origin={props.url.origin} />
    </div>
  );
}
