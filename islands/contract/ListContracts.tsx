import { ContratosAlquiler } from "@/generated/client/deno/edge.ts";
import { useSignal } from "@preact/signals";
import { ApiResponse } from "@/model/api-response.ts";
import ContractsTable from "@/components/contract/ContractTable.tsx";
import Button from "@/components/Button.tsx";

interface ListCrontactsProps {
  contractsList: ContratosAlquiler[];
  origin: string;
}

export default function ListContracts(
  { contractsList, origin }: ListCrontactsProps,
) {
  const contracts = useSignal<ContratosAlquiler[]>(contractsList);
  const skip = useSignal(0);

  const isLoading = useSignal(false);
  const isMaxElements = useSignal(false);

  function handlerClick() {
    skip.value += 10;

    const loadContracts = async () => {
      const url = new URL(`${origin}/api/contract`);
      url.searchParams.append("skip", String(skip.value));

      const res = await fetch(url);

      const { data } = (await res.json()) as ApiResponse<
        ContratosAlquiler[]
      >;

      if (res.status === 200) {
        if (data.length > 0) {
          contracts.value = [...contracts.value, ...data];
          skip.value += 10;
        } else {
          isMaxElements.value = true;
        }
      }
      isLoading.value = false;
    };

    isLoading.value = true;
    loadContracts();
  }

  return (
    <div class="flex flex-col gap-2">
      <ContractsTable contracts={contracts} />
      {!isMaxElements.value && (
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
