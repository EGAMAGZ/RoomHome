import { PageProps } from "$fresh/server.ts";
import { useSignal } from "@preact/signals";
import { PropietariosEmpresariales } from "@/generated/client/deno/edge.ts";
import ListOwners from "@/islands/owner/empresarial/ListOwners.tsx";

export default function EmpresarialOwnerPage(props: PageProps) {
  const owners = useSignal<PropietariosEmpresariales[]>([]);
  return (
    <div>
      <h1>Propietarios Empresariales</h1>
      <a href="/admin/owner/empresarial/register">
        Nueva Propietario Empresarial
      </a>
      <ListOwners owners={owners} origin={props.url.origin} />
    </div>
  );
}
