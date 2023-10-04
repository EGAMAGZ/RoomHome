import { Signal, useSignal, useSignalEffect } from "@preact/signals";
import { ApiResponse } from "@/model/api-response.ts";
import {
  Prisma,
  PropietariosEmpresariales,
  PropietariosPrivados,
} from "@/generated/client/deno/edge.ts";

interface SelectPrivateOwnerProps {
  origin: string;
  value: Signal<string>;
  onChange: (value: string) => void;
}

interface SelectEmpresarialOwnerProps {
  origin: string;
  value: Signal<string>;
  onChange: (value: string) => void;
}

export function SelectPrivateOwner(
  { origin, onChange, value }: SelectPrivateOwnerProps,
) {
  const owners = useSignal<
    Pick<PropietariosPrivados, "num_propietario" | "nom_propietario">[]
  >([]);
  useSignalEffect(() => {
    const fetchPrivateOwners = async () => {
      const res = await fetch(`${origin}/api/owner/private`);
      const { data } = (await res.json()) as ApiResponse<
        Pick<PropietariosPrivados, "num_propietario" | "nom_propietario">[]
      >;
      if (res.status === 200) {
        owners.value = data;
      }
    };
    fetchPrivateOwners();
  });

  function handleSelectChange(event: Event) {
    onChange((event.target as HTMLSelectElement).value);
  }

  return (
    <select name="privateOwner" onChange={handleSelectChange} value={value}>
      <option value="-1" selected>Selecciona un propietario</option>
      {owners.value.map((owner) => (
        <option key={owner.num_propietario} value={owner.num_propietario}>
          {owner.nom_propietario}
        </option>
      ))}
    </select>
  );
}

export function SelectEmpresarialOwner(
  { origin, onChange, value }: SelectEmpresarialOwnerProps,
) {
  const owners = useSignal<
    Pick<PropietariosEmpresariales, "num_propietario_em" | "nom_contacto">[]
  >(
    [],
  );

  useSignalEffect(() => {
    const fetchEmpresarialOwners = async () => {
      const res = await fetch(`${origin}/api/owner/empresarial`);
      const { data } = (await res.json()) as ApiResponse<
        Pick<PropietariosEmpresariales, "num_propietario_em" | "nom_contacto">[]
      >;
      if (res.status === 200) {
        owners.value = data;
      }
    };
    fetchEmpresarialOwners();
  });
  function handleSelectChange(event: Event) {
    onChange((event.target as HTMLSelectElement).value);
  }
  return (
    <select name="empresarialOwner" value={value} onChange={handleSelectChange}>
      <option value="-1" selected>Selecciona un propietario</option>
      {owners.value.map((owner) => (
        <option key={owner.num_propietario_em} value={owner.num_propietario_em}>
          {owner.nom_contacto}
        </option>
      ))}
    </select>
  );
}
