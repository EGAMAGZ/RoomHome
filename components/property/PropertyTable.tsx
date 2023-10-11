import { Signal } from "@preact/signals";
import { InmueblesAlquilerWithPropietary } from "@/schema/property.ts";

interface PropertyTableProps {
  properties: Signal<InmueblesAlquilerWithPropietary[]>;
}

export function PropertyTable({ properties }: PropertyTableProps) {
  return (
    <div class="overflow-x-auto">
      <table class="table table-zebra">
        <thead>
          <tr>
            <th>
              ID
            </th>
            <th>
              Direccion
            </th>
            <th>
              Tipo
            </th>
            <th>
              Importe mensual
            </th>
            <th>
              Propietario
            </th>
          </tr>
        </thead>
        <tbody>
          {properties.value.map((property) => (
            <PropertyTableItem property={property} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>
              ID
            </th>
            <th>
              Direccion
            </th>
            <th>
              Tipo
            </th>
            <th>
              Importe mensual
            </th>
            <th>
              Propietario
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

interface PropertyTableItemProps {
  property: InmueblesAlquilerWithPropietary;
}

export function PropertyTableItem({ property }: PropertyTableItemProps) {
  return (
    <tr>
      <th>
        <div>
          {property.num_inmueble}
        </div>
      </th>
      <td>
        {property.dir_inmueble}
      </td>
      <td>
        <div class="flex items-center">
          <div>
            <div class="badge badge-accent">
              {property.tipo_inmueble}
            </div>
            <div>
              {property.num_habitaciones} habitaciones
            </div>
          </div>
        </div>
      </td>
      <td>
        ${new Intl.NumberFormat().format(property.import_mensual)}
      </td>
      <td>
        <div class="flex items-center">
          <div>
            <div>
              {property.propietarioEmpresarial?.nom_empresa ??
                property.propietarioPrivado?.nom_propietario}
            </div>
            <div class="badge badge-accent">
              {property.propietarioEmpresarial?.nom_empresa
                ? "Empresarial"
                : "Privado"}
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}
