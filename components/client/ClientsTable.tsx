import { Signal } from "@preact/signals";
import { Clientes } from "@/generated/client/deno/edge.ts";
import { IconUserCircle } from "@tabler-icons";
import { formatPhoneNumber } from "@/utils/phone.ts";

interface ClientsTableProps {
  clients: Signal<Clientes[]>;
}

export function ClientsTable({ clients }: ClientsTableProps) {
  return (
    <div class="overflow-x-auto">
      <table class="table table-zebra">
        <thead>
          <tr>
            <th>
              ID
            </th>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Email</th>
            <th>Importe máximo</th>
            <th>Empleado</th>
          </tr>
        </thead>
        <tbody>
          {clients.value.map((client: Clientes) => (
            <ClientsTableItem
              client={client}
              key={client.num_cliente}
            />
          ))}
        </tbody>
        {clients.value.length !== 0 && (
          <tfoot>
            <tr>
              <th>
                ID
              </th>
              <th>Nombre</th>
              <th>Teléfono</th>
              <th>Email</th>
              <th>Importe máximo</th>
              <th>Empleado</th>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
}

interface ClientsTableItemProps {
  client: Clientes;
}
export function ClientsTableItem({ client }: ClientsTableItemProps) {
  return (
    <tr>
      <th>
        <div>
          {client.num_cliente}
        </div>
      </th>
      <td>
        <div class="flex items-center space-x-3">
          <div class="avatar">
            <div class="mask mask-squircle w-12 h-12">
              <IconUserCircle size="48" />
            </div>
          </div>
          <div>
            <div class="font-bold">{client.nom_cliente}</div>
          </div>
        </div>
      </td>
      <td>
        {client.email_cliente}
      </td>
      <td>
        {formatPhoneNumber(client.tel_cliente)}
      </td>
      <td>
        ${new Intl.NumberFormat().format(client.importmax_inmueble)}
      </td>
      <td>
        <div class="flex items-center">
          <div>
            <div class="font-bold">{client.nom_empleado ?? "N/A"}</div>
            <div class="text-sm opacity-50">{client.sucregistro_cliente}</div>
          </div>
        </div>
      </td>
    </tr>
  );
}
