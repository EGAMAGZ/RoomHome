import { Citas, InmueblesAlquiler } from "@/generated/client/deno/edge.ts";
import { formatDate } from "@/utils/date.ts";

interface DateCardProps {
  date: Citas & { inmueble: InmueblesAlquiler };
}

export default function DateCard({ date }: DateCardProps) {
  return (
    <div class="card shadow">
      <div class="card-body">
        <h2 class="card-title">
          {date.inmueble.tipo_inmueble} de {date.inmueble.num_habitaciones}{" "}
          habitaciones
          <div class="badge badge-accent">
            {date.fech_cita ? formatDate(date.fech_cita) : "Sin fecha"}
          </div>
        </h2>
        <p>
          <span class="font-semibold mr-2">
            Tipo de inmueble:
          </span>
          {date.inmueble.tipo_inmueble}
        </p>
        <p>
          <span class="font-semibold mr-2">
            Dirección:
          </span>
          {date.inmueble.dir_inmueble}
        </p>
      </div>
    </div>
  );
}
