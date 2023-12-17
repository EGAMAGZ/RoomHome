import { batch, useSignal, useSignalEffect } from "@preact/signals";
import { RegisterEmpresarialOwnerSchema } from "../../../schema/empresarial-owner.ts";
import Button from "@/components/Button.tsx";
import { Input } from "@/islands/Input.tsx";
import Select from "@/islands/Select.tsx";
import { companiesTypes } from "@/data/companies-types.ts";

export default function NewOwnerForm() {
  const nomEmpresa = useSignal("");
  const nomEmpresaErrors = useSignal<string>("");

  const tipoEmpresa = useSignal("");
  const tipoEmpresaErrors = useSignal<string>("");

  const dirEmpresa = useSignal("");
  const dirEmpresaErrors = useSignal<string>("");

  const telEmpresa = useSignal("");
  const telEmpresaErrors = useSignal<string>("");

  const nomContacto = useSignal("");
  const nomContactoErrors = useSignal<string>("");

  const isValid = useSignal(false);

  useSignalEffect(() => {
    batch(() => {
      const result = RegisterEmpresarialOwnerSchema.safeParse({
        nom_empresa: nomEmpresa.value,
        tipo_empresa: tipoEmpresa.value,
        dir_empresa: dirEmpresa.value,
        tel_empresa: telEmpresa.value,
        nom_contacto: nomContacto.value,
      });

      isValid.value = result.success;

      if (!result.success) {
        const formattedErrors = result.error.format();
        nomEmpresaErrors.value =
          formattedErrors.nom_empresa?._errors.join(", ") ??
            "";
        tipoEmpresaErrors.value =
          formattedErrors.tipo_empresa?._errors.join(", ") ?? "";
        dirEmpresaErrors.value =
          formattedErrors.dir_empresa?._errors.join(", ") ??
            "";
        telEmpresaErrors.value =
          formattedErrors.tel_empresa?._errors.join(", ") ?? "";
        nomContactoErrors.value =
          formattedErrors.nom_contacto?._errors.join(", ") ?? "";
      } else {
        nomEmpresaErrors.value = "";
        tipoEmpresaErrors.value = "";
        dirEmpresaErrors.value = "";
        telEmpresaErrors.value = "";
        nomContactoErrors.value = "";
      }
    });
  });

  return (
    <form method="POST">
      <div class="flex flex-col font-sans">
        <Input
          type="text"
          name="nom_empresa"
          label="Nombre de empresa:"
          value={nomEmpresa}
          error={nomEmpresaErrors}
          required
        />

        <Select
          defaultValue="Seleccione tipo de empresa"
          name="tipo_empresa"
          label="Tipo de empresa:"
          value={tipoEmpresa}
          error={tipoEmpresaErrors}
          required
        >
          {companiesTypes.map((companyType) => (
            <option value={companyType}>{companyType}</option>
          ))}
        </Select>

        <Input
          type="text"
          name="dir_empresa"
          label="Direccion:"
          value={dirEmpresa}
          error={dirEmpresaErrors}
          required
        />

        <Input
          type="tel"
          name="tel_empresa"
          label="Telefono:"
          value={telEmpresa}
          error={telEmpresaErrors}
          required
        />

        <Input
          type="text"
          name="nom_contacto"
          label="Nombre de contacto:"
          value={nomContacto}
          error={nomContactoErrors}
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
