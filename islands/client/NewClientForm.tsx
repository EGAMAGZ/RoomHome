import { batch, useSignal, useSignalEffect } from "@preact/signals";
import { RegisterClientSchema } from "@/schema/client.ts";
import { propertiesType } from "@/data/properties-type.ts";
import { offices } from "@/data/offices.ts";
import Button from "@/components/Button.tsx";
import { Input } from "@/islands/Input.tsx";
import Select from "@/islands/Select.tsx";

export default function NewClientForm() {
  const nomCliente = useSignal("");
  const nomClienteErrors = useSignal<string>("");

  const telCliente = useSignal("");
  const telClienteErrors = useSignal<string>("");

  const tipoInmueble = useSignal("");
  const tipoInmuebleErrors = useSignal<string>("");

  const importmaxInmueble = useSignal("");
  const importmaxInmuebleErrors = useSignal<string>("");

  const sucregistroCliente = useSignal("");
  const sucregistroClienteErrors = useSignal<string>("");

  const emailCliente = useSignal("");
  const emailClienteErrors = useSignal<string>("");

  const passCliente = useSignal("");
  const passClienteErrors = useSignal<string>("");

  const isValid = useSignal(true);

  useSignalEffect(() => {
    batch(() => {
      const result = RegisterClientSchema.safeParse({
        nom_cliente: nomCliente.value,
        tel_cliente: telCliente.value,
        tipo_inmueble: tipoInmueble.value,
        importmax_inmueble: importmaxInmueble.value,
        sucregistro_cliente: sucregistroCliente.value,
        email_cliente: emailCliente.value,
        pass_cliente: passCliente.value,
      });

      isValid.value = result.success;

      if (!result.success) {
        const formattedErrors = result.error.format();
        nomClienteErrors.value =
          formattedErrors.nom_cliente?._errors.join(", ") ?? "";
        telClienteErrors.value =
          formattedErrors.tel_cliente?._errors.join(", ") ?? "";
        tipoInmuebleErrors.value =
          formattedErrors.tipo_inmueble?._errors.join(", ") ?? "";
        importmaxInmuebleErrors.value =
          formattedErrors.importmax_inmueble?._errors.join(", ") ?? "";
        sucregistroClienteErrors.value =
          formattedErrors.sucregistro_cliente?._errors.join(", ") ?? "";
        emailClienteErrors.value =
          formattedErrors.email_cliente?._errors.join(", ") ??
            "";
        passClienteErrors.value =
          formattedErrors.pass_cliente?._errors.join(", ") ??
            "";
      } else {
        nomClienteErrors.value = "";
        telClienteErrors.value = "";
        tipoInmuebleErrors.value = "";
        importmaxInmuebleErrors.value = "";
        sucregistroClienteErrors.value = "";
        emailClienteErrors.value = "";
        passClienteErrors.value = "";
      }
    });
  });

  return (
    <form method="POST">
      <div class="flex flex-col font-sans">
        <Input
          type="text"
          value={nomCliente}
          error={nomClienteErrors}
          label="Nombre:"
          name="nom_cliente"
          required
        />

        <Input
          type="tel"
          value={telCliente}
          error={telClienteErrors}
          label="Telefono:"
          name="tel_cliente"
          required
        />

        <Select
          defaultValue="Seleccione un tipo de inmueble"
          value={tipoInmueble}
          error={tipoInmuebleErrors}
          label="Tipo de inmueble favorito:"
          name="tipo_inmueble"
          required
        >
          {propertiesType.map((propertyType) => (
            <option value={propertyType}>{propertyType}</option>
          ))}
        </Select>

        <Input
          type="number"
          label="Importe máximo:"
          value={importmaxInmueble}
          error={importmaxInmuebleErrors}
          name="importmax_inmueble"
          required
        />

        <Select
          defaultValue="Seleccione una sucursal"
          value={sucregistroCliente}
          error={sucregistroClienteErrors}
          label="Sucursal:"
          name="sucregistro_cliente"
          required
        >
          {offices.map((office) => <option value={office}>{office}</option>)}
        </Select>

        <Input
          type="email"
          label="Correo electronico:"
          value={emailCliente}
          error={emailClienteErrors}
          name="email_cliente"
          required
        />

        <Input
          type="password"
          label="Contraseña:"
          value={passCliente}
          error={passClienteErrors}
          name="pass_cliente"
          required
        />

        <Button
          type="submit"
          state="primary"
          disabled={!isValid.value}
        >
          <span>Registar</span>
        </Button>
      </div>
    </form>
  );
}
