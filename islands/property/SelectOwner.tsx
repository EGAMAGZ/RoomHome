import { Signal, useSignal, useSignalEffect } from "@preact/signals";
import { ApiResponse } from "@/schema/api-response.ts";
import {
  Prisma,
  PropietariosEmpresariales,
  PropietariosPrivados,
} from "@/generated/client/deno/edge.ts";
import Select from "@/islands/Select.tsx";

interface SelectPrivateOwnerProps {
  value: Signal<string>;
  errors: Signal<string>;
}

export function SelectPrivateOwner(
  { value, errors }: SelectPrivateOwnerProps,
) {
  const owners = useSignal<PropietariosPrivados[]>([]);

  const isLoading = useSignal(false);

  useSignalEffect(() => {
    const fetchPrivateOwners = async () => {
      const res = await fetch("/api/owner/private");
      const { data } = (await res.json()) as ApiResponse<
        PropietariosPrivados[]
      >;
      if (res.status === 200) {
        owners.value = data;
      }
      isLoading.value = false;
    };

    isLoading.value = true;
    fetchPrivateOwners();
  });

  return (
    <Select
      name="num_propietario"
      defaultValue="Selecciona un propietario"
      label="Propietario privado:"
      value={value}
      error={errors}
      disabled={isLoading.value}
    >
      {owners.value.map((owner) => (
        <option key={owner.num_propietario} value={owner.num_propietario}>
          {owner.nom_propietario}
        </option>
      ))}
    </Select>
  );
}

interface SelectEmpresarialOwnerProps {
  value: Signal<string>;
  errors: Signal<string>;
}
export function SelectEmpresarialOwner(
  { value, errors }: SelectEmpresarialOwnerProps,
) {
  const owners = useSignal<PropietariosEmpresariales[]>([]);

  const isLoading = useSignal(false);

  useSignalEffect(() => {
    const fetchEmpresarialOwners = async () => {
      const res = await fetch("/api/owner/empresarial");
      const { data } = (await res.json()) as ApiResponse<
        PropietariosEmpresariales[]
      >;
      if (res.status === 200) {
        owners.value = data;
      }
      isLoading.value = false;
    };

    isLoading.value = true;
    fetchEmpresarialOwners();
  });

  return (
    <Select
      name="num_propietario_emp"
      defaultValue="Selecciona un propietario"
      label="Propietario empresarial:"
      value={value}
      error={errors}
      disabled={isLoading.value}
    >
      {owners.value.map((owner) => (
        <option
          key={owner.num_propietario_em}
          value={owner.num_propietario_em}
        >
          {owner.nom_empresa} - {owner.nom_contacto}
        </option>
      ))}
    </Select>
  );
}
