import { IconTrash } from "@tabler-icons";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface DeleteDinosaurButtonProps {
  id: number;
  onDelete: (id: number) => void;
}

export default function DeleteDinosaurButton(
  { id, onDelete }: DeleteDinosaurButtonProps,
) {
  function handleClick(e: Event) {
    e.preventDefault();
    onDelete(id);
  }

  return (
    <button
      onClick={handleClick}
      class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2"
      disabled={!IS_BROWSER}
    >
      <IconTrash size={24} />
      <span>
        Delete
      </span>
    </button>
  );
}
