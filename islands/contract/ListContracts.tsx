import { ContratosAlquiler } from "@/generated/client/deno/edge.ts";
import { useComputed, useSignal } from "@preact/signals";
import { ApiResponse } from "@/schema/api-response.ts";
import ContractsTable from "@/components/contract/ContractTable.tsx";
import Button from "@/components/Button.tsx";
import { ContractWithClientAndProperty } from "@/schema/contract.ts";

interface ListCrontactsProps {
  contractsList: ContractWithClientAndProperty[];
}

export default function ListContracts(
  { contractsList }: ListCrontactsProps,
) {
  const contracts = useSignal<ContractWithClientAndProperty[]>(contractsList);
  const skip = useSignal(0);

  const isLoading = useSignal(false);
  const isMaxElements = useSignal(false);

  const showButton = useComputed(() =>
    contracts.value.length >= 10 && !(isMaxElements.value)
  );

  function handlerClick() {
    const loadContracts = async () => {
      const searchParams = new URLSearchParams();
      searchParams.append("skip", String(skip.value));

      const url = `/api/contract?${String(searchParams)}`;

      const res = await fetch(url);

      const { data } = (await res.json()) as ApiResponse<
        ContractWithClientAndProperty[]
      >;

      if (res.status === 200) {
        isMaxElements.value = data.length < 10;
        if (data.length > 0) {
          contracts.value = [...contracts.value, ...data];
          skip.value += 10;
        }
      }
      isLoading.value = false;
    };

    skip.value += 10;
    isLoading.value = true;
    loadContracts();
  }

  return (
    <div class="flex flex-col gap-2">
      <ContractsTable contracts={contracts} />
      {showButton.value && (
        <Button
          type="button"
          state="secondary"
          loading={isLoading.value}
          disabled={isLoading.value}
          onClick={handlerClick}
        >
          <span>Cargar mas</span>
        </Button>
      )}
    </div>
  );
}
