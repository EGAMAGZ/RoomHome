import Button from "@/components/Button.tsx";
import { batch, useSignal, useSignalEffect } from "@preact/signals";
import { AsigDateSchema } from "@/schema/date.ts";
import { Input } from "@/islands/Input.tsx";

export default function AsignDateForm() {
  const fechCita = useSignal("");
  const fechCitaErrors = useSignal<string>("");

  const isValid = useSignal(false);

  useSignalEffect(() => {
    batch(() => {
      const result = AsigDateSchema.safeParse({
        fech_cita: fechCita.value,
      });

      isValid.value = result.success;

      if (!result.success) {
        const formattedErrors = result.error.format();

        fechCitaErrors.value = formattedErrors.fech_cita?._errors.join(", ") ??
          "";
      } else {
        fechCitaErrors.value = "";
      }
    });
  });

  return (
    <div class="card shadow">
      <div class="card-body">
        <form method="POST">
          <Input
            type="date"
            label="Fecha de cita:"
            name="fech_cita"
            error={fechCitaErrors}
            value={fechCita}
            required
          />

          <Button
            type="submit"
            state="primary"
            disabled={!isValid.value}
          >
            <span>Asignar fecha</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
