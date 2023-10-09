import { Signal, useSignal } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface SliderProps {
  min: number;
  max: number;
  step: number;
  label: string;
  name: string;
  value: Signal<number>;
  suffix?: string;
  disabled?: boolean;
}

export function Slider(props: SliderProps) {
  const handleInput = (event: Event) => {
    props.value.value = (event.target as HTMLInputElement).valueAsNumber;
  };

  return (
    <>
      <label class="font-semibold text-xl font-sans">
        {props.label}({props.suffix && props.suffix}
        {new Intl.NumberFormat().format(props.value.value)})
      </label>
      <div>
        <input
          type="range"
          min={props.min}
          max={props.max}
          value={props.value}
          class="range"
          step={props.step}
          name={props.name}
          onInput={handleInput}
          disabled={!IS_BROWSER || props.disabled}
        />
        <div class="w-full flex justify-between text-xs px-2">
          <span class="font-sans">
            {new Intl.NumberFormat().format(props.min)}
          </span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span class="font-sans">
            {new Intl.NumberFormat().format(props.max)}
          </span>
        </div>
      </div>
    </>
  );
}
