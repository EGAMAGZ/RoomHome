import { Signal } from "@preact/signals";
import { DateWithClientAndProperty } from "@/schema/date.ts";
import { formatDate } from "@/utils/date.ts";

interface DatesTableProps {
  dates: Signal<DateWithClientAndProperty[]>;
}

export function DatesTable({ dates }: DatesTableProps) {
  return (
    <div class="overflow-x-auto">
      <table class="table table-zebra">
        <thead>
          <tr>
            <th>ID</th>
            <th>Direccion</th>
            <th>Tipo</th>
            <th>Nombre</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {dates.value.map((date: DateWithClientAndProperty) => (
            <DatesTableItem date={date} key={date.num_cita} />
          ))}
        </tbody>
        {dates.value.length !== 0 && (
          <tfoot>
            <tr>
              <th>ID</th>
              <th>Direccion</th>
              <th>Tipo</th>
              <th>Nombre</th>
              <th>Fecha</th>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
}

interface DatesTableItemProps {
  date: DateWithClientAndProperty;
}

export function DatesTableItem({ date }: DatesTableItemProps) {
  return (
    <tr>
      <th>{date.num_cita}</th>
      <th>{date.inmueble.dir_inmueble}</th>
      <th>
        <div class="badge badge-accent">
          {date.inmueble.tipo_inmueble}
        </div>
      </th>
      <th>
        <div class="flex items-center">
          <div>
            <div>
              {date.cliente.nom_cliente}
            </div>
            <div class="text-sm opacity-50">
              {date.cliente.sucregistro_cliente}
            </div>
          </div>
        </div>
      </th>
      <th>
        {date.fech_cita ? formatDate(new Date(date.fech_cita)) : (
          <a
            href={`/admin/date/${date.num_cita}`}
            class="btn btn-primary btn-sm"
          >
            Asignar fecha
          </a>
        )}
      </th>
    </tr>
  );
}
