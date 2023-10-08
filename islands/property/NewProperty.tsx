import { useSignal, useSignalEffect } from "@preact/signals";
import { Alert } from "@/components/Alerts.tsx";
import { RegisterPropertySchema } from "@/schema/property.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import {
  SelectEmpresarialOwner,
  SelectPrivateOwner,
} from "@/islands/property/SelectOwner.tsx";
import { propertiesType } from "@/data/properties-type.ts";
import Button from "@/components/Button.tsx";
import FormControl from "@/components/FormControl.tsx";

interface NewPropertyFormProps {
  origin: string;
}

export default function NewPropertyForm({ origin }: NewPropertyFormProps) {
  const address = useSignal("");
  const addressErrors = useSignal<string>("");

  const type = useSignal("");
  const typeErrors = useSignal<string>("");

  const rooms = useSignal("");
  const roomsErrors = useSignal<string>("");

  const amount = useSignal("");
  const amountErrors = useSignal<string>("");

  const privateOwner = useSignal("-1");
  const privateOwnerErrors = useSignal<string>("");

  const empresarialOwner = useSignal("-1");
  const empresarialOwnerErrors = useSignal<string>("");

  const ownerErrors = useSignal<string>("");

  useSignalEffect(() => {
    const result = RegisterPropertySchema.safeParse({
      address: address.value,
      type: type.value,
      rooms: rooms.value,
      amount: amount.value,
      privateOwner: privateOwner.value,
      empresarialOwner: empresarialOwner.value,
    });
    if (!result.success) {
      const formattedErrors = result.error.format();
      addressErrors.value = formattedErrors.address?._errors.join(", ") ?? "";
      typeErrors.value = formattedErrors.type?._errors.join(", ") ?? "";
      roomsErrors.value = formattedErrors.rooms?._errors.join(", ") ?? "";
      amountErrors.value = formattedErrors.amount?._errors.join(", ") ?? "";
      privateOwnerErrors.value =
        formattedErrors.privateOwner?._errors.join(", ") ?? "";
      empresarialOwnerErrors.value =
        formattedErrors.empresarialOwner?._errors.join(
          ", ",
        ) ?? "";
      ownerErrors.value = formattedErrors._errors.join(", ") ?? "";
    } else {
      addressErrors.value = "";
      typeErrors.value = "";
      roomsErrors.value = "";
      amountErrors.value = "";
      privateOwnerErrors.value = "";
      empresarialOwnerErrors.value = "";
      ownerErrors.value = "";
    }
  });

  return (
    <form method="POST">
      <div class="flex flex-col font-sans">
        <FormControl
          label="Direccion:"
          error={addressErrors}
        >
          <input
            type="text"
            name="address"
            value={address}
            onInput={(
              e,
            ) => (address.value = (e.target as HTMLInputElement).value)}
            disabled={!IS_BROWSER}
            class={`input ${
              addressErrors.value ? "input-error" : "input-primary"
            } input-bordered`}
            required
          />
        </FormControl>

        <FormControl
          label="Tipo de Inmueble:"
          error={typeErrors}
        >
          <select
            class={`select select-bordered w-full ${
              typeErrors.value ? "select-error" : "select-primary"
            }`}
            name="type"
            onInput={(e) => type.value = (e.target as HTMLSelectElement).value}
            disabled={!IS_BROWSER}
            required
          >
            <option value="">Seleccione un tipo de inmueble</option>
            {propertiesType.map((propertyType) => (
              <option value={propertyType}>{propertyType}</option>
            ))}
          </select>
        </FormControl>

        <FormControl label="Habitaciones:" error={roomsErrors}>
          <input
            type="number"
            name="rooms"
            value={rooms}
            onInput={(
              e,
            ) => (rooms.value = (e.target as HTMLInputElement).value)}
            disabled={!IS_BROWSER}
            class={`input ${
              roomsErrors.value ? "input-error" : "input-primary"
            } input-bordered`}
            required
          />
        </FormControl>

        <FormControl
          label="Importe mensual:"
          error={amountErrors}
        >
          <input
            type="number"
            name="amount"
            value={amount}
            onInput={(
              e,
            ) => (amount.value = (e.target as HTMLInputElement).value)}
            disabled={!IS_BROWSER}
            required
            class={`input ${
              amountErrors.value ? "input-error" : "input-primary"
            } input-bordered`}
          />
        </FormControl>

        {ownerErrors.value !== "" && (
          <div class="col-span-2">
            <Alert message={ownerErrors.value} />
          </div>
        )}

        <FormControl
          label="Propietario empresarial:"
          error={empresarialOwnerErrors}
        >
          <SelectEmpresarialOwner
            origin={origin}
            value={empresarialOwner}
            onChange={(value) => {
              empresarialOwner.value = value;
            }}
            errors={empresarialOwnerErrors}
          />
        </FormControl>

        <FormControl
          label="Propietario privado:"
          error={privateOwnerErrors}
        >
          <SelectPrivateOwner
            origin={origin}
            value={privateOwner}
            onChange={(value) => {
              privateOwner.value = value;
            }}
            errors={privateOwnerErrors}
          />
        </FormControl>

        <Button
          type="submit"
          state="primary"
        >
          <span>Registar</span>
        </Button>
      </div>
    </form>
  );
}
