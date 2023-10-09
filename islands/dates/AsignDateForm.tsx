import Button from "@/components/Button.tsx";
import FormControl from "@/components/FormControl.tsx";
import { useSignal, useSignalEffect } from "@preact/signals";
import { z } from "zod";

export default function AsignDateForm() {
  const date = useSignal("");
  const dateErrors = useSignal<string>("");

  useSignalEffect(() => {
    const result = z.coerce.date({
      required_error: "La fecha es requerida",
      invalid_type_error: "La fecha debe ser una fecha",
    })
      .min(new Date(), {
        message: "La fecha debe ser mayor o igual a la fecha actual",
      })
      .safeParse(date.value);

    if (!result.success) {
      const formattedErrors = result.error.format();
      dateErrors.value = formattedErrors._errors.join(", ");
    } else {
      dateErrors.value = "";
    }
  });

  return (
    <div class="card shadow">
      <div class="card-body">
        <form method="POST">
          <FormControl
            label="Fecha de cita"
            error={dateErrors}
          >
            <input
              type="date"
              name="date"
              value={date.value}
              onInput={(e) => date.value = (e.target as HTMLInputElement).value}
              class={`input input-bordered ${
                dateErrors.value ? "input-error" : "input-primary"
              }`}
              required
            />
          </FormControl>
          <Button
            type="submit"
            state="primary"
          >
            <span>Asignar fecha</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
