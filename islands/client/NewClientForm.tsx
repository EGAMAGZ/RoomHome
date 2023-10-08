import { useSignal, useSignalEffect } from "@preact/signals";
import { RegisterClientSchema } from "@/schema/client.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { Alert } from "@/components/Alerts.tsx";
import { propertiesType } from "@/data/properties-type.ts";
import { offices } from "@/data/offices.ts";
import Button from "@/components/Button.tsx";
import FormControl from "@/components/FormControl.tsx";

export default function NewClientForm() {
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
            class={`input ${
              nameErrors.value ? "input-error" : "input-primary"
            } input-bordered`}
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
          label="Tipo de inmueble favorito:"
          error={typeErrors}
        >
          <select
            class={`select select-bordered w-full ${
              typeErrors.value ? "select-error" : "select-primary"
            }`}
            name="type"
            value={type.value}
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

        <FormControl
          label="Importe máximo:"
          error={amountErrors}
        >
          <input
            type="number"
            name="amount"
            value={amount.value}
            onInput={(e) => amount.value = (e.target as HTMLInputElement).value}
            disabled={!IS_BROWSER}
            class={`input input-bordered w-full ${
              amountErrors.value ? "input-error" : "input-primary"
            }`}
            required
          />
        </FormControl>

        <FormControl
          label="Sucursal:"
          error={officeErrors}
        >
          <select
            class={`select select-bordered w-full ${
              officeErrors.value ? "select-error" : "select-primary"
            }`}
            name="office"
            value={office.value}
            onInput={(e) =>
              office.value = (e.target as HTMLSelectElement).value}
            disabled={!IS_BROWSER}
            required
          >
            <option value="">Seleccione una sucursal</option>
            {offices.map((o) => <option value={o}>{o}</option>)}
          </select>
        </FormControl>

        <FormControl
          label="Correo:"
          error={emailErrors}
        >
          <input
            type="email"
            name="email"
            value={email.value}
            onInput={(e) => email.value = (e.target as HTMLInputElement).value}
            disabled={!IS_BROWSER}
            class={`input input-bordered ${
              emailErrors.value ? "input-error" : "input-primary"
            }`}
            required
          />
        </FormControl>

        <FormControl
          label="Contraseña:"
          error={passwordErrors}
        >
          <input
            type="password"
            name="password"
            value={password.value}
            onInput={(e) =>
              password.value = (e.target as HTMLInputElement).value}
            disabled={!IS_BROWSER}
            class={`input input-bordered ${
              passwordErrors.value ? "input-error" : "input-primary"
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
