import { batch, useSignal, useSignalEffect } from "@preact/signals";
import { Alert } from "@/components/Alerts.tsx";
import { IconUserCircle } from "@tabler-icons";
import { Input } from "@/islands/Input.tsx";
import Button from "@/components/Button.tsx";
import { UserRegisterSchema } from "@/schema/user.ts";
import { offices } from "@/data/offices.ts";
import { propertiesType } from "@/data/properties-type.ts";
import Select from "@/islands/Select.tsx";

interface RegisterFormProps {
  error: string;
}

export default function RegisterForm({ error }: RegisterFormProps) {
  const nomCliente = useSignal("");
  const nomClienteErrors = useSignal("");

  const telCliente = useSignal("");
  const telClienteErrors = useSignal("");

  const tipoInmueble = useSignal("");
  const tipoInmuebleErrors = useSignal("");

  const importmaxInmueble = useSignal("");
  const importmaxInmuebleErrors = useSignal("");

  const sucregistroCliente = useSignal("");
  const sucregistroClienteErrors = useSignal("");

  const emailCliente = useSignal("");
  const emailClienteErrors = useSignal("");

  const passCliente = useSignal("");
  const passClienteErrors = useSignal("");

  const confirmPass = useSignal("");
  const confirmPassErrors = useSignal("");

  const isValid = useSignal(false);

  useSignalEffect(() => {
    batch(() => {
      const result = UserRegisterSchema.safeParse({
        nom_cliente: nomCliente.value,
        tel_cliente: telCliente.value,
        tipo_inmueble: tipoInmueble.value,
        importmax_inmueble: importmaxInmueble.value,
        sucregistro_cliente: sucregistroCliente.value,
        email_cliente: emailCliente.value,
        pass_cliente: passCliente.value,
        confirm_pass: confirmPass.value,
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
          formattedErrors.email_cliente?._errors.join(", ") ?? "";
        passClienteErrors.value =
          formattedErrors.pass_cliente?._errors.join(", ") ?? "";
        confirmPassErrors.value =
          formattedErrors.confirm_pass?._errors.join(", ") ?? "";
      } else {
        nomClienteErrors.value = "";
        telClienteErrors.value = "";
        tipoInmuebleErrors.value = "";
        importmaxInmuebleErrors.value = "";
        sucregistroClienteErrors.value = "";
        emailClienteErrors.value = "";
        passClienteErrors.value = "";
        confirmPassErrors.value = "";
      }
    });
  });

  return (
    <form method="POST">
      <div class="flex flex-col gap-4">
        <IconUserCircle size={96} class="self-center" />
        {error && <Alert message={error} />}
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

          <Input
            type="password"
            label="Confirmar contraseña:"
            value={confirmPass}
            error={confirmPassErrors}
            name="confirm_pass"
            required
          />

          <Button state="primary" type="submit" disabled={!isValid.value}>
            <span>Registrarme</span>
          </Button>
        </div>
      </div>
    </form>
  );
}
