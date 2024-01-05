import { batch, useSignal, useSignalEffect } from "@preact/signals";
import { RegisterPrivateOwnerSchema } from "@/schema/private-owner.ts";
import Button from "@/components/Button.tsx";
import { Input } from "@/islands/Input.tsx";

export default function NewOwnerForm() {
  const nomPropietario = useSignal("");
  const nomPropietarioErrors = useSignal<string>("");

  const dirPropietario = useSignal("");
  const dirPropietarioErrors = useSignal<string>("");

  const telPropietario = useSignal("");
  const telPropietarioErrors = useSignal<string>("");

  const isValid = useSignal(false);

  useSignalEffect(() => {
    batch(() => {
      const result = RegisterPrivateOwnerSchema.safeParse({
        nom_propietario: nomPropietario.value,
        dir_propietario: dirPropietario.value,
        tel_propietario: telPropietario.value,
      });

      isValid.value = result.success;

      if (!result.success) {
        const formattedErrors = result.error.format();
        nomPropietarioErrors.value =
          formattedErrors.nom_propietario?._errors.join(", ") ??
            "";
        dirPropietarioErrors.value =
          formattedErrors.dir_propietario?._errors.join(", ") ?? "";
        telPropietarioErrors.value =
          formattedErrors.tel_propietario?._errors.join(", ") ??
            "";
      } else {
        nomPropietarioErrors.value = "";
        dirPropietarioErrors.value = "";
        telPropietarioErrors.value = "";
      }
    });
  });
  return (
    <form method="POST">
      <div class="flex flex-col font-sans">
        <Input
          type="text"
          label="Nombre:"
          name="nom_propietario"
          value={nomPropietario}
          error={nomPropietarioErrors}
          required
        />

        <Input
          type="text"
          label="Dirección:"
          name="dir_propietario"
          value={dirPropietario}
          error={dirPropietarioErrors}
          required
        />

        <Input
          type="text"
          label="Teléfono:"
          name="tel_propietario"
          value={telPropietario}
          error={telPropietarioErrors}
          required
        />

        <Button
          type="submit"
          state="primary"
          disabled={!isValid.value}
        >
          <span>Registar</span>
        </Button>
      </div>
    </form>
  );
}
