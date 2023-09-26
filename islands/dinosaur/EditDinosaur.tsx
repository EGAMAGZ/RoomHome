import { Dinosaur } from "@/generated/client/deno/edge.ts";
import { useSignal } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { Alert } from "@/components/Alerts.tsx";
import { EditDinosaurSchema } from "@/schema/dinosaur.ts";

interface EditDinosaurProps {
  dinosaur: Dinosaur | null;
}

export function EditDinosaur({ dinosaur }: EditDinosaurProps) {
  const name = useSignal<string>(dinosaur?.name ?? "");
  const nameErrors = useSignal<string | undefined>(undefined);

  const description = useSignal<string>(dinosaur?.description ?? "");
  const descriptionErrors = useSignal<string | undefined>(undefined);

  async function handleSubmit(event: Event) {
    event.preventDefault();

    const result = EditDinosaurSchema.safeParse({
      name: name.value,
      description: description.value,
    });

    if (!result.success) {
      const formattedErrors = result.error.format();
      nameErrors.value = formattedErrors.name?._errors.join(", ");
      descriptionErrors.value = formattedErrors.description?._errors.join(", ");
    } else {
      nameErrors.value = undefined;
      descriptionErrors.value = undefined;

      const res = await fetch(`/api/dinosaur/${dinosaur?.id}`, {
        method: "PUT",
        body: JSON.stringify(result.data),
      });

      if (res.status === 200) {
        window.location.href = "/dinosaur";
      }
    }
  }

  return (
    <div class="border-1 border-black rounded-md flex flex-col p-4 gap-2">
      <form onSubmit={handleSubmit}>
        <div class="flex flex-col gap-4">
          <div class="bg-black text-white p-2 text-center rounded-sm">
            <span>
              <b>Index:</b> {dinosaur?.id}
            </span>
          </div>
          <div class="flex gap-2">
            <label class="font-semibold">Nombre:</label>
            <input
              type="text"
              value={name}
              onInput={(e) => {
                name.value = (e.target as HTMLInputElement).value;
              }}
              class="border-1 border-black rounded-sm"
              disabled={!IS_BROWSER}
              placeholder="Nombre del dinosaurio"
              required
            />
            {nameErrors.value && <Alert message={nameErrors.value} />}
          </div>
          <div class="flex gap-2">
            <label class="font-semibold">Descripcion:</label>
            <textarea
              value={description}
              onInput={(e) => {
                description.value = (e.target as HTMLTextAreaElement).value;
              }}
              class="border-1 border-black rounded-sm w-full h-16"
              placeholder="Descripción del dinosaurio"
              disabled={!IS_BROWSER}
            >
            </textarea>
            {descriptionErrors.value && (
              <Alert message={descriptionErrors.value} />
            )}
          </div>
          <button
            type="submit"
            disabled={!IS_BROWSER}
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Editar
          </button>
        </div>
      </form>
    </div>
  );
}
