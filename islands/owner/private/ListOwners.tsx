import { PropietariosPrivados } from "@/generated/client/deno/edge.ts";
import { Signal, useSignal, useSignalEffect } from "@preact/signals";
import { ApiResponse } from "@/model/api-response.ts";
import OwnerItem from "@/components/owner/private/OwnerItem.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { PrivateOwnerTable } from "@/components/owner/OwnerTable.tsx";
import Button from "@/components/Button.tsx";

interface ListOwnersProps {
  origin: string;
  ownersList: PropietariosPrivados[];
}

export default function ListOwners({ ownersList }: ListOwnersProps) {
  const owners = useSignal<PropietariosPrivados[]>(ownersList);
  const skip = useSignal(0);
  const isLoading = useSignal(false);
  const isMaxElements = useSignal(false);

  function handleClick() {
    const loadOwners = async () => {
      const url = new URL(`${origin}/api/owner/private`);
      url.searchParams.append("skip", String(skip.value));
      const res = await fetch(url);

      const { data } = (await res.json()) as ApiResponse<
        PropietariosPrivados[]
      >;

      if (res.status === 200) {
        if (data.length > 0) {
          owners.value = [...owners.value, ...data];
          skip.value += 10;
        } else {
          isMaxElements.value = true;
        }
      }

      isLoading.value = true;
    };
    skip.value += 10;
    isLoading.value = false;
    loadOwners();
  }

  return (
    <div class="flex flex-col gap-2">
      <PrivateOwnerTable owners={owners} />
      {!isMaxElements.value && (
        <Button
          type="button"
          state="secondary"
          loading={isLoading.value}
          disabled={isLoading.value}
          onClick={handleClick}
        >
          <span>Cargar más</span>
        </Button>
      )}
    </div>
  );
}
