import { useSignal, useSignalEffect } from "@preact/signals";
import { RegisterEmpresarialOwnerSchema } from "@/schema/empresarial-owner.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { Alert } from "@/components/Alerts.tsx";

interface NewOwnerProps {
  origin: string;
}

export default function NewOwner({ origin }: NewOwnerProps) {
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
    <div class="flex flex-col">
      <div class="grid grid-cols-[min-content_1fr] gap-x-4">
        <label>Empresa:</label>
        <input
          type="text"
          name="company"
          value={company.value}
          onInput={(e) => company.value = (e.target as HTMLInputElement).value}
          disabled={!IS_BROWSER}
          required
        />
        {companyErrors.value && (
          <Alert message={companyErrors.value} classList="col-span-2" />
        )}

        <label>Tipo:</label>
        <input
          type="text"
          name="type"
          value={type.value}
          onInput={(e) => type.value = (e.target as HTMLInputElement).value}
          disabled={!IS_BROWSER}
          required
        />
        {typeErrors.value && (
          <Alert message={typeErrors.value} classList="col-span-2" />
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
      </div>
      <button type="submit" disabled={!IS_BROWSER} class="bg-blue-500">
        Registrar
      </button>
    </div>
  );
}
