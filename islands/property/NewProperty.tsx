import { useSignal, useSignalEffect } from "@preact/signals";
import { Alert } from "@/components/Alerts.tsx";
import { RegisterPropertySchema } from "@/schema/property.ts";
import {
  SelectEmpresarialOwner,
  SelectPrivateOwner,
} from "@/islands/property/SelectOwner.tsx";
import { propertiesType } from "@/data/properties-type.ts";
import Button from "@/components/Button.tsx";
import { Input } from "@/islands/Input.tsx";
import Select from "@/islands/Select.tsx";

export default function NewPropertyForm() {
  const dirInmueble = useSignal("");
  const dirInmuebleErrors = useSignal("");

  const tipoInmueble = useSignal("");
  const tipoInmuebleErrors = useSignal("");

  const numHabitaciones = useSignal("");
  const numHabitacionesErrors = useSignal("");

  const importMensual = useSignal("");
  const importMensualErrors = useSignal("");

  const numPropietario = useSignal("");
  const numPropietarioErrors = useSignal("");

  const numPropietarioEmp = useSignal("");
  const numPropietarioEmpErrors = useSignal("");

  const propietarioErrors = useSignal("");

  const isValid = useSignal(false);

  useSignalEffect(() => {
    const result = RegisterPropertySchema.safeParse({
      dir_inmueble: dirInmueble.value,
      tipo_inmueble: tipoInmueble.value,
      num_habitaciones: numHabitaciones.value,
      import_mensual: importMensual.value,
      num_propietario: numPropietario.value,
      num_propietario_emp: numPropietarioEmp.value,
    });

    isValid.value = result.success;

    if (!result.success) {
      const formattedErrors = result.error.format();
      dirInmuebleErrors.value =
        formattedErrors.dir_inmueble?._errors.join(", ") ??
          "";
      tipoInmuebleErrors.value =
        formattedErrors.tipo_inmueble?._errors.join(", ") ??
          "";
      numHabitacionesErrors.value =
        formattedErrors.num_habitaciones?._errors.join(", ") ?? "";
      importMensualErrors.value =
        formattedErrors.import_mensual?._errors.join(", ") ??
          "";
      numPropietarioErrors.value =
        formattedErrors.num_propietario?._errors.join(", ") ?? "";
      numPropietarioEmpErrors.value =
        formattedErrors.num_propietario_emp?._errors.join(
          ", ",
        ) ?? "";
      propietarioErrors.value = formattedErrors._errors.join(", ") ?? "";
    } else {
      dirInmuebleErrors.value = "";
      tipoInmuebleErrors.value = "";
      numHabitacionesErrors.value = "";
      importMensualErrors.value = "";
      numPropietarioErrors.value = "";
      numPropietarioEmpErrors.value = "";
      propietarioErrors.value = "";
    }
  });

  return (
    <form method="POST">
      <div class="flex flex-col font-sans">
        <Input
          type="text"
          label="Dirección:"
          name="dir_inmueble"
          value={dirInmueble}
          error={dirInmuebleErrors}
          required
        />

        <Select
          label="Tipo de Inmueble:"
          defaultValue="Seleccione un tipo de inmueble"
          value={tipoInmueble}
          error={tipoInmuebleErrors}
          name="tipo_inmueble"
          required
        >
          {propertiesType.map((propertyType) => (
            <option value={propertyType}>{propertyType}</option>
          ))}
        </Select>

        <Input
          type="number"
          label="No. de Habitaciones:"
          name="num_habitaciones"
          value={numHabitaciones}
          error={numHabitacionesErrors}
          required
        />

        <Input
          type="number"
          label="Importe mensual:"
          name="import_mensual"
          value={importMensual}
          error={importMensualErrors}
          required
        />

        {propietarioErrors.value !== "" && (
          <div class="col-span-2">
            <Alert message={propietarioErrors.value} />
          </div>
        )}

        <SelectEmpresarialOwner
          value={numPropietarioEmp}
          errors={numPropietarioEmpErrors}
        />

        <SelectPrivateOwner
          value={numPropietario}
          errors={numPropietarioErrors}
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
