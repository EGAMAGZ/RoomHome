import Button from "@/components/Button.tsx";
import { useSignal } from "@preact/signals";
import { IconCalendarDue, IconCheck } from "@tabler-icons";
import { ApiResponse } from "@/model/api-response.ts";
import { Citas } from "@/generated/client/deno/edge.ts";

interface RequestDateButtonProps {
  date: { num_cita: number } | null;
  userId: number;
  propertyId: number;
  origin: string;
}

export default function RequestDateButton(
  { userId, propertyId, origin, date }: RequestDateButtonProps,
) {
  const isLoading = useSignal(false);

  const isRequested = useSignal(date !== null);

  function handleClick() {
    const requestDate = async () => {
      const url = new URL(`${origin}/api/date`);

      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          userId,
          propertyId,
        }),
      });

      const { data, message } = (await res.json()) as ApiResponse<Citas>;

      if (res.status === 200) {
        isRequested.value = true;
      }

      isLoading.value = false;
    };
    isLoading.value = true;
    requestDate();
  }

  return (
    <Button
      type="button"
      state={isRequested.value ? "ghost" : "primary"}
      disabled={isRequested.value || isLoading.value}
      loading={isLoading.value}
      onClick={handleClick}
    >
      {isRequested.value
        ? (
          <>
            <IconCheck size="24" />
            <span>Cita solicitada</span>
          </>
        )
        : (
          <>
            <IconCalendarDue size="24" />
            <span>Solicitar cita</span>
          </>
        )}
    </Button>
  );
}
