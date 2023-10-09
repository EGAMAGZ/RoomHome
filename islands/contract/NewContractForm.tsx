import FormControl from "@/components/FormControl.tsx";
import { useSignal, useSignalEffect } from "@preact/signals";
import { RegisterContractSchema } from "@/schema/contract.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { paymentMethods } from "@/data/payment-method.ts";
import SelectClient from "@/islands/client/SelectClient.tsx";
import SelectProperty from "@/islands/property/SelectProperty.tsx";
import Button from "@/components/Button.tsx";

interface NewContractFormProps {
  origin: string;
}

export default function NewContractForm({ origin }: NewContractFormProps) {
  const clientId = useSignal("");
  const clientIdErrors = useSignal("");

  const address = useSignal("");
  const addressErrors = useSignal("");

  const propertyId = useSignal("");
  const propertyIdErrors = useSignal("");

  const amount = useSignal("");
  const amountErrors = useSignal("");

  const paymentMethod = useSignal("");
  const paymentMethodErrors = useSignal("");

  const rentalDeposit = useSignal("");
  const rentalDepositErrors = useSignal("");

  const months = useSignal("");
  const monthsErrors = useSignal("");

  const startDate = useSignal("");
  const startDateErrors = useSignal("");

  const endDate = useSignal("");
  const endDateErrors = useSignal("");

  useSignalEffect(() => {
    const result = RegisterContractSchema.safeParse({
      clientId: clientId.value,
      address: address.value,
      propertyId: propertyId.value,
      amount: amount.value,
      paymentMethod: paymentMethod.value,
      rentalDeposit: rentalDeposit.value,
      months: months.value,
      startDate: startDate.value,
      endDate: endDate.value,
    });

    if (!result.success) {
      const formattedErrors = result.error.format();
      clientIdErrors.value = formattedErrors.clientId?._errors.join(", ") ?? "";
      addressErrors.value = formattedErrors.address?._errors.join(", ") ?? "";
      propertyIdErrors.value = formattedErrors.propertyId?._errors.join(", ") ??
        "";
      amountErrors.value = formattedErrors.amount?._errors.join(", ") ?? "";
      paymentMethodErrors.value =
        formattedErrors.paymentMethod?._errors.join(", ") ?? "";
      rentalDepositErrors.value =
        formattedErrors.rentalDeposit?._errors.join(", ") ?? "";
      monthsErrors.value = formattedErrors.months?._errors.join(", ") ?? "";
      startDateErrors.value = formattedErrors.startDate?._errors.join(", ") ??
        "";
      endDateErrors.value = formattedErrors.endDate?._errors.join(", ") ?? "";
    } else {
      clientIdErrors.value = "";
      addressErrors.value = "";
      propertyIdErrors.value = "";
      amountErrors.value = "";
      paymentMethodErrors.value = "";
      rentalDepositErrors.value = "";
      monthsErrors.value = "";
      startDateErrors.value = "";
      endDateErrors.value = "";
    }
  });

  return (
    <form method="POST">
      <div class="flex flex-col font-sans">
        <FormControl
          label="Cliente:"
          error={clientIdErrors}
        >
          <SelectClient
            errors={clientIdErrors}
            value={clientId}
            onChange={(setValue) => (clientId.value = setValue)}
            origin={origin}
          />
        </FormControl>

        <FormControl
          label="Dirección del cliente:"
          error={addressErrors}
        >
          <input
            type="text"
            name="address"
            value={address.value}
            onInput={(e) =>
              address.value = (e.target as HTMLInputElement).value}
            class={`input input-bordered ${
              addressErrors.value ? "input-error" : "input-primary"
            }`}
            disabled={!IS_BROWSER}
            required
          />
        </FormControl>

        <FormControl
          label="Propiedad:"
          error={propertyIdErrors}
        >
          <SelectProperty
            errors={propertyIdErrors}
            value={propertyId}
            onChange={(setValue) => (propertyId.value = setValue)}
            origin={origin}
          />
        </FormControl>

        <FormControl
          label="Importe mensual:"
          error={amountErrors}
        >
          <input
            type="number"
            name="amount"
            value={amount.value}
            onInput={(e) => amount.value = (e.target as HTMLInputElement).value}
            class={`input input-bordered ${
              amountErrors.value ? "input-error" : "input-primary"
            }`}
            disabled={!IS_BROWSER}
            required
          />
        </FormControl>

        <FormControl
          label="Forma de pago:"
          error={paymentMethodErrors}
        >
          <select
            name="paymentMethod"
            value={paymentMethod.value}
            onInput={(e) =>
              paymentMethod.value = (e.target as HTMLInputElement).value}
            class={`select select-bordered ${
              paymentMethodErrors.value ? "select-error" : "select-primary"
            }`}
            disabled={!IS_BROWSER}
            required
          >
            <option value="">Selecciona una forma de pago</option>
            {paymentMethods.map((paymentMethod) => (
              <option value={paymentMethod}>{paymentMethod}</option>
            ))}
          </select>
        </FormControl>

        <FormControl
          label="Deposito de alquiler:"
          error={rentalDepositErrors}
        >
          <input
            type="number"
            name="rentalDeposit"
            value={rentalDeposit.value}
            onInput={(e) =>
              rentalDeposit.value = (e.target as HTMLInputElement).value}
            class={`input input-bordered ${
              rentalDepositErrors.value ? "input-error" : "input-primary"
            }`}
            disabled={!IS_BROWSER}
            required
          />
        </FormControl>

        <FormControl
          label="Meses:"
          error={monthsErrors}
        >
          <input
            type="number"
            name="months"
            value={months.value}
            onInput={(e) => months.value = (e.target as HTMLInputElement).value}
            class={`input input-bordered ${
              monthsErrors.value ? "input-error" : "input-primary"
            }`}
            disabled={!IS_BROWSER}
            required
          />
        </FormControl>

        <FormControl
          label="Fecha de inicio:"
          error={startDateErrors}
        >
          <input
            type="date"
            name="startDate"
            value={startDate.value}
            onInput={(e) =>
              startDate.value = (e.target as HTMLInputElement).value}
            class={`input input-bordered ${
              startDateErrors.value ? "input-error" : "input-primary"
            }`}
            disabled={!IS_BROWSER}
            required
          />
        </FormControl>

        <FormControl
          label="Fecha de vencimiento:"
          error={endDateErrors}
        >
          <input
            type="date"
            name="endDate"
            value={endDate.value}
            onInput={(e) =>
              endDate.value = (e.target as HTMLInputElement).value}
            class={`input input-bordered ${
              endDateErrors.value ? "input-error" : "input-primary"
            }`}
            disabled={!IS_BROWSER}
            required
          />
        </FormControl>
        <Button
          type="submit"
          state="primary"
        >
          <span>Registrar</span>
        </Button>
      </div>
    </form>
  );
}
