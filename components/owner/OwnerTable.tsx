import { PropietariosEmpresariales } from "@/generated/client/deno/edge.ts";
import { Signal } from "@preact/signals";
import { formatPhoneNumber } from "@/utils/phone.ts";

interface EmpresarialOwnerTableProps {
  owners: Signal<PropietariosEmpresariales[]>;
}

export function EmpresarialOwnerTable({ owners }: EmpresarialOwnerTableProps) {
  return (
    <div class="overflow-x-auto">
      <table class="table table-zebra">
        <thead>
          <tr>
            <th>
              ID
            </th>
            <th>
              Empresa
            </th>
            <th>
              Direccion
            </th>
            <th>
              Telefono
            </th>
            <th>
              Contacto
            </th>
          </tr>
        </thead>
        <tbody>
          {owners.value.map((owner: PropietariosEmpresariales) => (
            <EmpresarialOwnerTableItem owner={owner} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>
              ID
            </th>
            <th>
              Empresa
            </th>
            <th>
              Direccion
            </th>
            <th>
              Telefono
            </th>
            <th>
              Contacto
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

interface EmpresarialOwnerTableItemProps {
  owner: PropietariosEmpresariales;
}

export function EmpresarialOwnerTableItem(
  { owner }: EmpresarialOwnerTableItemProps,
) {
  return (
    <tr>
      <th>
        {owner.num_propietario_em}
      </th>
      <td>
        <div class="flex items-center">
          <div>
            <div>
              {owner.nom_empresa}
            </div>
            <div class="badge badge-accent">
              {owner.tipo_empresa}
            </div>
          </div>
        </div>
      </td>
      <td>
        {owner.dir_empresa}
      </td>
      <td>
        {formatPhoneNumber(owner.tel_empresa)}
      </td>
      <td>
        {owner.nom_contacto}
      </td>
    </tr>
  );
}
