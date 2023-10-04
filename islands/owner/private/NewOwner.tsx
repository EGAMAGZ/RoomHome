import { useSignal, useSignalEffect } from "@preact/signals";
import { Alert } from "@/components/Alerts.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { RegisterPrivateOwnerSchema } from "@/schema/owner-private.ts";

interface NewOwnerProps {
  origin: string;
}

export default function NewOwner({ origin }: NewOwnerProps) {
  const name = useSignal("");
  const nameErrors = useSignal<string>("");

  const address = useSignal("");
  const addressErrors = useSignal<string>("");

  const phone = useSignal("");
  const phoneErrors = useSignal<string>("");

  useSignalEffect(() => {
    const result = RegisterPrivateOwnerSchema.safeParse({
      name: name.value,
      address: address.value,
      phone: phone.value,
    });
    if (!result.success) {
      const formattedErrors = result.error.format();
      nameErrors.value = formattedErrors.name?._errors.join(", ") ?? "";
      addressErrors.value = formattedErrors.address?._errors.join(", ") ?? "";
      phoneErrors.value = formattedErrors.phone?._errors.join(", ") ?? "";
    } else {
      nameErrors.value = "";
      addressErrors.value = "";
      phoneErrors.value = "";
    }
  });
  return (
    <div class="flex flex-col">
      <div class="grid grid-cols-[min-content_1fr] gap-x-4">
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={name.value}
          onInput={(e) => name.value = (e.target as HTMLInputElement).value}
          disabled={!IS_BROWSER}
          required
        />
        {nameErrors.value && (
          <Alert message={nameErrors.value} classList="col-span-2" />
        )}

        <label>Direccion:</label>
        <input
          type="text"
          name="address"
          value={address.value}
          onInput={(e) => address.value = (e.target as HTMLInputElement).value}
          disabled={!IS_BROWSER}
          required
        />
        {addressErrors.value && (
          <Alert message={addressErrors.value} classList="col-span-2" />
        )}

        <label>Telefono:</label>
        <input
          type="number"
          name="phone"
          value={phone.value}
          onInput={(e) => phone.value = (e.target as HTMLInputElement).value}
          disabled={!IS_BROWSER}
          required
        />

        {phoneErrors.value && (
          <Alert message={phoneErrors.value} classList="col-span-2" />
        )}
      </div>
      <button type="submit" disabled={!IS_BROWSER} class="bg-blue-500">
        Registrar
      </button>
    </div>
  );
}
