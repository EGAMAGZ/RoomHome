import { useSignal } from "@preact/signals";
import { DateWithClientAndProperty } from "@/schema/date.ts";
import { ApiResponse } from "@/schema/api-response.ts";
import { DatesTable } from "@/components/date/DatesTable.tsx";
import Button from "@/components/Button.tsx";

interface ListDatesProps {
  datesList: DateWithClientAndProperty[];
  origin: string;
}
export default function LisDates({ datesList, origin }: ListDatesProps) {
  const dates = useSignal<DateWithClientAndProperty[]>(datesList);
  const skip = useSignal(0);

  const isLoading = useSignal(false);
  const isMaxElements = useSignal(false);

  function handleClick() {
    skip.value += 10;

    const loadDates = async () => {
      const url = new URL(`${origin}/api/date`);
      url.searchParams.append("skip", String(skip.value));

      const res = await fetch(url);

      const { data } = (await res.json()) as ApiResponse<
        DateWithClientAndProperty[]
      >;

      if (res.status === 200) {
        if (data.length > 0) {
          dates.value = [...dates.value, ...data];
          skip.value += 10;
        } else {
          isMaxElements.value = true;
        }
      }
      isLoading.value = false;
    };

    isLoading.value = true;
    loadDates();
  }

  return (
    <div class="flex flex-col gap-2">
      <DatesTable dates={dates} />
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
