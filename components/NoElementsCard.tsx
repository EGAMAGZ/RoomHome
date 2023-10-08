import { IconCircleX } from "@tabler-icons";

interface EmptyCardProps {
  text: string;
}

export default function EmptyCard({ text }: EmptyCardProps) {
  return (
    <div class="card bg-neutral-300 shadow-sm">
      <div class="card-body items-center">
        <IconCircleX size="72" />
        <p class="font-sans font-semibold text-lg">{text}</p>
      </div>
    </div>
  );
}
