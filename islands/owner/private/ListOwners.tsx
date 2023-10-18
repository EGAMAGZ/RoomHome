import { PropietariosPrivados } from "@/generated/client/deno/edge.ts";
import { useComputed, useSignal } from "@preact/signals";
import { ApiResponse } from "@/schema/api-response.ts";
import { PrivateOwnerTable } from "@/components/owner/OwnerTable.tsx";
import Button from "@/components/Button.tsx";

interface ListOwnersProps {
  ownersList: PropietariosPrivados[];
}

export default function ListOwners({ ownersList }: ListOwnersProps) {
  const owners = useSignal<PropietariosPrivados[]>(ownersList);
  const skip = useSignal(0);
  const isLoading = useSignal(false);
  const isMaxElements = useSignal(false);

  const showButton = useComputed(() =>
    owners.value.length >= 10 && !(isMaxElements.value)
  );

  function handleClick() {
    const loadOwners = async () => {
      const searchParams = new URLSearchParams();
      searchParams.append("skip", String(skip.value));

      const url = `/api/owner/private/list?${String(searchParams)}`;
      const res = await fetch(url);

      const { data } = (await res.json()) as ApiResponse<
        PropietariosPrivados[]
      >;

      if (res.status === 200) {
        isMaxElements.value = data.length < 10;
        if (data.length > 0) {
          owners.value = [...owners.value, ...data];
          skip.value += 10;
        }
      }
      isLoading.value = false;
    };
    skip.value += 10;
    isLoading.value = true;
    loadOwners();
  }

  return (
    <div class="flex flex-col gap-2">
      <PrivateOwnerTable owners={owners} />
      {showButton.value && (
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
