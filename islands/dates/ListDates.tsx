import { useComputed, useSignal } from "@preact/signals";
import { DateWithClientAndProperty } from "@/schema/date.ts";
import { ApiResponse } from "@/schema/api-response.ts";
import { DatesTable } from "@/components/date/DatesTable.tsx";
import Button from "@/components/Button.tsx";

interface ListDatesProps {
  datesList: DateWithClientAndProperty[];
}
export default function LisDates({ datesList }: ListDatesProps) {
  const dates = useSignal<DateWithClientAndProperty[]>(datesList);
  const skip = useSignal(0);

  const isLoading = useSignal(false);
  const isMaxElements = useSignal(false);

  const showButton = useComputed(() =>
    dates.value.length >= 10 && !(isMaxElements.value)
  );

  function handleClick() {
    const loadDates = async () => {
      const searchParams = new URLSearchParams();
      searchParams.append("skip", String(skip.value));

      const url = `/api/date?${String(searchParams)}`;
      const res = await fetch(url);

      const { data } = (await res.json()) as ApiResponse<
        DateWithClientAndProperty[]
      >;

      if (res.status === 200) {
        isMaxElements.value = data.length < 10;
        if (data.length > 0) {
          dates.value = [...dates.value, ...data];
          skip.value += 10;
        }
      }
      isLoading.value = false;
    };

    skip.value += 10;
    isLoading.value = true;
    loadDates();
  }

  return (
    <div class="flex flex-col gap-2">
      <DatesTable dates={dates} />
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
