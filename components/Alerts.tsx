import { IconCircleX } from "@tabler-icons";

interface AlertProps {
  message: string;
  classList?: string;
}

export function Alert({ message, classList }: AlertProps) {
  return (
    <div
      class={`alert alert-error ${classList ?? ""}`}
      role="alert"
    >
      <IconCircleX size="24" />
      <span class="font-sans font-semibold">
        {message}
      </span>
    </div>
  );
}
