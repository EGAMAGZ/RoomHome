import { Dinosaur } from "@/generated/client/deno/edge.ts";
import { DinosaurCard } from "@/components/DinosaurCard.tsx";
import { Signal } from "@preact/signals";

interface DinosaurListProps {
  dinosaurs: Signal<Dinosaur[]>;
}

export function DinosaurList({ dinosaurs }: DinosaurListProps) {
  async function handleDelete(id: number) {
    const res = await fetch(`/api/dinosaur/${id}`, {
      method: "DELETE",
    });
    if (res.status === 200) {
      dinosaurs.value = dinosaurs.value.filter((dinosaur: Dinosaur) =>
        dinosaur.id !== id
      );
    }
  }

  return (
    <>
      {dinosaurs.value.map((dinosaur: Dinosaur) => (
        <DinosaurCard
          dinosaur={dinosaur}
          onDelete={handleDelete}
        />
      ))}
    </>
  );
}
