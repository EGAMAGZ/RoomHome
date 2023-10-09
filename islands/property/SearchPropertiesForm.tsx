import { Signal } from "@preact/signals";
import { Slider } from "@/islands/Slider.tsx";
import Button from "@/components/Button.tsx";
import { IconSearch } from "@tabler-icons";

interface SearchPropertiesFormProps {
  rooms: Signal<number>;
  price: Signal<number>;
}

export default function SearchPropertiesForm(
  { price, rooms }: SearchPropertiesFormProps,
) {
  return (
    <form method="POST">
      <span class="font-semibold text-4xl font-sans">Filtros</span>
      <div class="flex flex-col gap-2">
        <Slider
          min={1000}
          max={100000}
          step={1000}
          label="Importe mensual"
          name="amount"
          value={price}
          suffix="$"
        />
        <Slider
          min={1}
          max={10}
          step={1}
          label="Habitaciones"
          name="rooms"
          value={rooms}
        />
        <Button
          state="primary"
          type="submit"
        >
          <IconSearch size={24} />
          <span>Buscar</span>
        </Button>
      </div>
    </form>
  );
}
