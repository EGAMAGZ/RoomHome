import { useComputed, useSignal, useSignalEffect } from "@preact/signals";
import { RegisterContractSchema } from "@/schema/contract.ts";
import { paymentMethods } from "@/data/payment-method.ts";
import Button from "@/components/Button.tsx";
import Select from "@/islands/Select.tsx";
import { Input } from "@/islands/Input.tsx";
import { totalMonths } from "@/utils/date.ts";
import SelectClient from "@/islands/client/SelectClient.tsx";
import SelectProperty from "@/islands/property/SelectProperty.tsx";

export default function NewContractForm() {
  const numCliente = useSignal("");
  const numClienteErrors = useSignal("");

  const numInmueble = useSignal("");
  const numInmuebleErrors = useSignal("");

  const modPago = useSignal("");
  const modPagoErrors = useSignal("");

  const fechInicio = useSignal("");
  const fechInicioErrors = useSignal("");

  const fechFin = useSignal("");
  const fechFinErrors = useSignal("");

  const isValid = useSignal(false);

  const importeMensual = useSignal(0);
  const depPago = useSignal("0");
  const depPagoErrors = useSignal("");

  useSignalEffect(() => {
    const result = RegisterContractSchema.safeParse({
      num_cliente: numCliente.value,
      num_inmueble: numInmueble.value,
      dep_pago: depPago.value,
      mod_pago: modPago.value,
      fech_inicio: fechInicio.value,
      fech_fin: fechFin.value,
    });

    isValid.value = result.success;

    if (!result.success) {
      const formattedErrors = result.error.format();
      numClienteErrors.value =
        formattedErrors.num_cliente?._errors.join(", ") ??
          "";
      numInmuebleErrors.value =
        formattedErrors.num_inmueble?._errors.join(", ") ??
          "";
      modPagoErrors.value = formattedErrors.mod_pago?._errors.join(", ") ?? "";
      fechInicioErrors.value =
        formattedErrors.fech_inicio?._errors.join(", ") ??
          "";
      fechFinErrors.value = formattedErrors.fech_fin?._errors.join(", ") ?? "";
      depPagoErrors.value = formattedErrors.dep_pago?._errors.join(", ") ?? "";
    } else {
      numClienteErrors.value = "";
      numInmuebleErrors.value = "";
      modPagoErrors.value = "";
      fechInicioErrors.value = "";
      fechFinErrors.value = "";
      depPagoErrors.value = "";
    }
  });

  useSignalEffect(() => {
    depPago.value = String(importeMensual.value * 2);
  });

  return (
    <form method="POST">
      <div class="flex flex-col font-sans">
        <SelectClient
          errors={numClienteErrors}
          value={numCliente}
        />

        <SelectProperty
          errors={numInmuebleErrors}
          value={numInmueble}
          importMensual={importeMensual}
        />

        <input type="hidden" name="dep_pago" value={depPago} />

        <Select
          label="Forma de pago:"
          defaultValue="Selecciona una forma de pago"
          name="mod_pago"
          error={modPagoErrors}
          value={modPago}
          required
        >
          {paymentMethods.map((paymentMethod) => (
            <option value={paymentMethod}>{paymentMethod}</option>
          ))}
        </Select>

        <Input
          type="date"
          name="fech_inicio"
          label="Fecha de inicio:"
          value={fechInicio}
          error={fechInicioErrors}
          required
        />

        <Input
          type="date"
          name="fech_fin"
          label="Fecha de vencimiento:"
          value={fechFin}
          error={fechFinErrors}
          required
        />

        <Button
          type="submit"
          state="primary"
          disabled={!isValid.value}
        >
          <span>Registrar</span>
        </Button>
      </div>
    </form>
  );
}
