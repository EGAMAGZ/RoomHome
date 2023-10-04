import ListOwners from "@/islands/owner/private/ListOwners.tsx";
import { PropietariosPrivados } from "@/generated/client/deno/edge.ts";
import { useSignal } from "@preact/signals";
import { PageProps } from "$fresh/server.ts";

export default function PrivateOwnerPage(props: PageProps) {
  const owners = useSignal<PropietariosPrivados[]>([]);
  return (
    <div>
      <h1>Propietarios Privados</h1>
      <a href="/admin/owner/private/register">Nueva Propietario Privado</a>
      <ListOwners owners={owners} origin={props.url.origin} />
    </div>
  );
}
