import { Signal, useSignal } from "@preact/signals";
import { Dinosaur } from "@/generated/client/deno/edge.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { NewDinosaurSchema } from "@/schema/dinosaur.ts";
import { Alert } from "@/components/Alerts.tsx";

interface NewDinosaourFormProps {
  dinosaurs: Signal<Dinosaur[]>;
}

export function NewDinosaourForm({ dinosaurs }: NewDinosaourFormProps) {
  const name = useSignal<string>("");
  const nameErrors = useSignal<string | undefined>(undefined);

  const description = useSignal<string>("");
  const descriptionErrors = useSignal<string | undefined>(undefined);

  async function handleSubmit(e: Event) {
    e.preventDefault();

    const result = NewDinosaurSchema.safeParse({
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

      const res = await fetch("/api/dinosaur", {
        method: "POST",
        body: JSON.stringify(result.data),
      });

      if (res.status === 200) {
        const { data } = (await res.json()) as { data: Dinosaur };
        dinosaurs.value = [...dinosaurs.value, data];

        name.value = "";
        description.value = "";
      }
    }
  }

  return (
    <div class="border-1 border-black rounded-md flex flex-col p-4 gap-2">
      <form onSubmit={handleSubmit}>
        <div class="flex flex-col gap-4">
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
              class="border-1 border-black rounded-sm"
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
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
}
