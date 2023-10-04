import { Handlers } from "$fresh/server.ts";
export default function AdminPage() {
  return (
    <div class="flex flex- col gap-2">
      <a href="/admin/property/">Propiedades</a>
      <a href="/admin/owner/">Propietarios</a>

      <a href="/admin/client">Clientes</a>
    </div>
  );
}
