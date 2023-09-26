import { IconEdit } from "@tabler-icons";
import { Dinosaur } from "@/generated/client/deno/edge.ts";
import DeleteDinosaurButton from "@/islands/dinosaur/DeleteDinosaurButton.tsx";

interface DinosaurCardProps {
  dinosaur: Dinosaur;
  onDelete: (id: number) => void;
}

export function DinosaurCard({ dinosaur, onDelete }: DinosaurCardProps) {
  return (
    <div class="border-1 border-black rounded-md flex flex-col p-4 gap-2">
      <div class="bg-black text-white p-2 text-center rounded-sm">
        <span>
          <b>Index:</b> {dinosaur.id}
        </span>
      </div>
      <div class="flex flex-col">
        <span>
          <b>Nombre:</b> {dinosaur.name}
        </span>
        {dinosaur.description && (
          <span>
            <b>Descripción:</b> {dinosaur.description}
          </span>
        )}
      </div>
      <div class="grid grid-cols-2 gap-4">
        <a
          href={`/dinosaur/${dinosaur.id}/edit`}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2"
        >
          <IconEdit size={24} />
          <span>
            Editar
          </span>
        </a>
        <DeleteDinosaurButton id={dinosaur.id} onDelete={onDelete} />
      </div>
    </div>
  );
}
