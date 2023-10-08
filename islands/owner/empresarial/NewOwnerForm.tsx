import { useSignal, useSignalEffect } from "@preact/signals";
import { RegisterEmpresarialOwnerSchema } from "@/schema/empresarial-owner.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { Alert } from "@/components/Alerts.tsx";
import FormControl from "@/components/FormControl.tsx";
import Button from "@/components/Button.tsx";

export default function NewOwnerForm() {
  const company = useSignal("");
  const companyErrors = useSignal<string>("");

  const type = useSignal("");
  const typeErrors = useSignal<string>("");

  const address = useSignal("");
  const addressErrors = useSignal<string>("");

  const phone = useSignal("");
  const phoneErrors = useSignal<string>("");

  const name = useSignal("");
  const nameErrors = useSignal<string>("");

  useSignalEffect(() => {
    const result = RegisterEmpresarialOwnerSchema.safeParse({
      company: company.value,
      type: type.value,
      address: address.value,
      phone: phone.value,
      name: name.value,
    });

    if (!result.success) {
      const formattedErrors = result.error.format();
      companyErrors.value = formattedErrors.company?._errors.join(", ") ?? "";
      typeErrors.value = formattedErrors.type?._errors.join(", ") ?? "";
      addressErrors.value = formattedErrors.address?._errors.join(", ") ?? "";
      phoneErrors.value = formattedErrors.phone?._errors.join(", ") ?? "";
      nameErrors.value = formattedErrors.name?._errors.join(", ") ?? "";
    } else {
      companyErrors.value = "";
      typeErrors.value = "";
      addressErrors.value = "";
      phoneErrors.value = "";
      nameErrors.value = "";
    }
  });

  return (
    <form method="POST">
      <div class="flex flex-col font-sans">
        <FormControl
          label="Empresa:"
          error={companyErrors}
        >
          <input
            type="text"
            name="company"
            value={company.value}
            onInput={(e) =>
              company.value = (e.target as HTMLInputElement).value}
            disabled={!IS_BROWSER}
            class={`input input-bordered ${
              companyErrors.value ? "input-error" : "input-primary"
            }`}
            required
          />
        </FormControl>

        <FormControl
          label="Tipo:"
          error={typeErrors}
        >
          <input
            type="text"
            name="type"
            value={type.value}
            onInput={(e) => type.value = (e.target as HTMLInputElement).value}
            disabled={!IS_BROWSER}
            class={`input input-bordered ${
              typeErrors.value ? "input-error" : "input-primary"
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
