import { useSignal, useSignalEffect } from "@preact/signals";
import { Alert } from "@/components/Alerts.tsx";
import { RegisterPropertySchema } from "@/schema/property.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import {
  SelectEmpresarialOwner,
  SelectPrivateOwner,
} from "@/islands/property/SelectOwner.tsx";

interface NewPropertyProps {
  origin: string;
}

export default function NewProperty({ origin }: NewPropertyProps) {
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
    <div class="flex flex-col">
      <div class="grid grid-cols-[min-content_1fr] gap-x-4">
        <label>Direccion:</label>
        <input
          type="text"
          name="address"
          value={address}
          onInput={(
            e,
          ) => (address.value = (e.target as HTMLInputElement).value)}
          disabled={!IS_BROWSER}
          required
        />
        {addressErrors.value !== "" && (
          <Alert message={addressErrors.value} classList="col-span-2" />
        )}

        <label>Tipo:</label>
        <input
          type="text"
          name="type"
          value={type}
          onInput={(e) => (type.value = (e.target as HTMLInputElement).value)}
          disabled={!IS_BROWSER}
          required
        />
        {typeErrors.value !== "" && (
          <Alert message={typeErrors.value} classList="col-span-2" />
        )}

        <label>Habitaciones:</label>
        <input
          type="number"
          name="rooms"
          value={rooms}
          onInput={(e) => (rooms.value = (e.target as HTMLInputElement).value)}
          disabled={!IS_BROWSER}
          required
        />
        {roomsErrors.value !== "" && (
          <Alert message={roomsErrors.value} classList="col-span-2" />
        )}

        <label>Importe mensual:</label>
        <input
          type="number"
          name="amount"
          value={amount}
          onInput={(e) => (amount.value = (e.target as HTMLInputElement).value)}
          disabled={!IS_BROWSER}
          required
        />
        {amountErrors.value !== "" && (
          <Alert message={amountErrors.value} classList="col-span-2" />
        )}
        {ownerErrors.value !== "" && (
          <div class="col-span-2">
            <Alert message={ownerErrors.value} />
          </div>
        )}
        <div class="col-span-2">
          <SelectEmpresarialOwner
            origin={origin}
            value={empresarialOwner}
            onChange={(value) => {
              empresarialOwner.value = value;
            }}
          />
          {empresarialOwnerErrors.value !== "" && (
            <Alert message={empresarialOwnerErrors.value} />
          )}
        </div>
        <div class="col-span-2">
          <SelectPrivateOwner
            origin={origin}
            value={privateOwner}
            onChange={(value) => {
              privateOwner.value = value;
            }}
          />
          {privateOwnerErrors.value !== "" && (
            <Alert message={privateOwnerErrors.value} />
          )}
        </div>
      </div>
      <button type="submit" disabled={!IS_BROWSER}>Registrar</button>
    </div>
  );
}
