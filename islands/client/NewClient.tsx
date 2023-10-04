import { useSignal, useSignalEffect } from "@preact/signals";
import { RegisterClientSchema } from "@/schema/client.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { Alert } from "@/components/Alerts.tsx";

export default function NewClient() {
  const name = useSignal("");
  const nameErrors = useSignal<string>("");

  const phone = useSignal("");
  const phoneErrors = useSignal<string>("");

  const type = useSignal("");
  const typeErrors = useSignal<string>("");

  const amount = useSignal("");
  const amountErrors = useSignal<string>("");

  const employee = useSignal("");
  const employeeErrors = useSignal<string>("");

  const office = useSignal("");
  const officeErrors = useSignal<string>("");

  const email = useSignal("");
  const emailErrors = useSignal<string>("");

  const password = useSignal("");
  const passwordErrors = useSignal<string>("");

  useSignalEffect(() => {
    const result = RegisterClientSchema.safeParse({
      name: name.value,
      phone: phone.value,
      type: type.value,
      amount: amount.value,
      employee: employee.value,
      office: office.value,
      email: email.value,
      password: password.value,
    });

    if (!result.success) {
      const formattedErrors = result.error.format();
      nameErrors.value = formattedErrors.name?._errors.join(", ") ?? "";
      phoneErrors.value = formattedErrors.phone?._errors.join(", ") ?? "";
      typeErrors.value = formattedErrors.type?._errors.join(", ") ?? "";
      amountErrors.value = formattedErrors.amount?._errors.join(", ") ?? "";
      employeeErrors.value = formattedErrors.employee?._errors.join(", ") ?? "";
      officeErrors.value = formattedErrors.office?._errors.join(", ") ?? "";
      emailErrors.value = formattedErrors.email?._errors.join(", ") ?? "";
      passwordErrors.value = formattedErrors.password?._errors.join(", ") ?? "";
    } else {
      nameErrors.value = "";
      phoneErrors.value = "";
      typeErrors.value = "";
      amountErrors.value = "";
      employeeErrors.value = "";
      officeErrors.value = "";
      emailErrors.value = "";
      passwordErrors.value = "";
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

        <label>Tipo de inmueble favorito:</label>
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

        <label>Importe Máximo:</label>
        <input
          type="number"
          name="amount"
          value={amount.value}
          onInput={(e) => amount.value = (e.target as HTMLInputElement).value}
          disabled={!IS_BROWSER}
          required
        />
        {amountErrors.value && (
          <Alert message={amountErrors.value} classList="col-span-2" />
        )}

        <label>Empleado:</label>
        <input
          type="text"
          name="employee"
          value={employee.value}
          onInput={(e) => employee.value = (e.target as HTMLInputElement).value}
          disabled={!IS_BROWSER}
          required
        />
        {employeeErrors.value && (
          <Alert message={employeeErrors.value} classList="col-span-2" />
        )}

        <label>Sucursal:</label>
        <input
          type="text"
          name="office"
          value={office.value}
          onInput={(e) => office.value = (e.target as HTMLInputElement).value}
          disabled={!IS_BROWSER}
          required
        />
        {officeErrors.value && (
          <Alert message={officeErrors.value} classList="col-span-2" />
        )}

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email.value}
          onInput={(e) => email.value = (e.target as HTMLInputElement).value}
          disabled={!IS_BROWSER}
          required
        />
        {emailErrors.value && (
          <Alert message={emailErrors.value} classList="col-span-2" />
        )}

        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={password.value}
          onInput={(e) => password.value = (e.target as HTMLInputElement).value}
          disabled={!IS_BROWSER}
          required
        />
        {passwordErrors.value && (
          <Alert message={passwordErrors.value} classList="col-span-2" />
        )}
      </div>
      <button type="submit" class="bg-blue-500">
        Registrar
      </button>
    </div>
  );
}
