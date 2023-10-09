import { useSignal, useSignalEffect } from "@preact/signals";
import { Alert } from "@/components/Alerts.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { RegisterPrivateOwnerSchema } from "@/schema/private-owner.ts";
import FormControl from "@/components/FormControl.tsx";
import Button from "@/components/Button.tsx";

export default function NewOwnerForm() {
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
    <form method="POST">
      <div class="flex flex-col font-sans">
        <FormControl
          label="Nombre:"
          error={nameErrors}
        >
          <input
            type="text"
            name="name"
            value={name.value}
            onInput={(e) => name.value = (e.target as HTMLInputElement).value}
            disabled={!IS_BROWSER}
            class={`input input-bordered ${
              nameErrors.value ? "input-error" : "input-primary"
            }`}
            required
          />
        </FormControl>

        <FormControl
          label="Direccion:"
          error={addressErrors}
        >
          <input
            type="text"
            name="address"
            value={address.value}
            onInput={(e) =>
              address.value = (e.target as HTMLInputElement).value}
            disabled={!IS_BROWSER}
            class={`input input-bordered ${
              addressErrors.value ? "input-error" : "input-primary"
            }`}
            required
          />
        </FormControl>

        <FormControl
          label="Telefono:"
          error={phoneErrors}
        >
          <input
            type="number"
            name="phone"
            value={phone.value}
            onInput={(e) => phone.value = (e.target as HTMLInputElement).value}
            disabled={!IS_BROWSER}
            class={`input input-bordered ${
              phoneErrors.value ? "input-error" : "input-primary"
            }`}
            required
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
