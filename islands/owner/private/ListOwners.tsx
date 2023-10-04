import { PropietariosPrivados } from "@/generated/client/deno/edge.ts";
import { Signal, useSignal, useSignalEffect } from "@preact/signals";
import { ApiResponse } from "@/model/api-response.ts";
import OwnerItem from "@/components/owner/private/OwnerItem.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface ListOwnersProps {
  origin: string;
  owners: Signal<PropietariosPrivados[]>;
}

export default function ListOwners({ owners }: ListOwnersProps) {
  const isDisabled = useSignal(true);
  const skip = useSignal(0);
  useSignalEffect(() => {
    const loadOwners = async () => {
      const url = new URL(`${origin}/api/owner/private`);
      url.searchParams.append("skip", String(skip.peek()));
      const res = await fetch(url);

      const { data, message } = (await res.json()) as ApiResponse<
        PropietariosPrivados[]
      >;
      if (res.status === 200) {
        owners.value = data;
        skip.value += 10;
      }
      isDisabled.value = false;
    };
    isDisabled.value = true;
    loadOwners();
  });

  async function handleClick() {
    isDisabled.value = true;
    const url = new URL(`${origin}/api/owner/private`);
    url.searchParams.append("skip", String(skip.value));
    const res = await fetch(url);
    if (res.status === 200) {
      const { data } = (await res.json()) as ApiResponse<
        PropietariosPrivados[]
      >;
      owners.value = [...owners.value, ...data];
      skip.value += 10;
    }
    isDisabled.value = false;
  }

  return (
    <div class="flex flex-col">
      <div class="flex flex-col gap-2">
        {owners.value.map((owner: PropietariosPrivados) => (
          <OwnerItem
            id={owner.num_propietario}
            name={owner.nom_propietario}
            address={owner.dir_propietario}
            phone={owner.tel_propietario}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={handleClick}
        disabled={!IS_BROWSER || isDisabled.value}
      >
        Mostrar más
      </button>
    </div>
  );
}
