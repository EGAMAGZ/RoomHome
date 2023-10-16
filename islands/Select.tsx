import { ComponentChildren } from "preact";
import { Signal, useComputed, useSignal } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface SelectProps {
  value: Signal<string>;
  error: Signal<string>;
  label: string;
  children: ComponentChildren;
  defaultValue: string;
  name: string;
  required?: boolean;
  disabled?: boolean;
  classList?: string;
}

export default function Select(props: SelectProps) {
  const isTouched = useSignal(false);

  const showErrors = useComputed(() =>
    isTouched.value && props.error.value !== ""
  );

  const handleFocus = () => {
    isTouched.value = true;
  };

  const handleBlur = () => {
    isTouched.value = true;
  };

  const handleInput = (event: Event) => {
    props.value.value = (event.target as HTMLSelectElement).value;
  };

  return (
    <div class={`form-control ${props.classList ?? ""}`}>
      <label class="label">
        <span class="label-text font-semibold">{props.label}</span>
      </label>
      <select
        name={props.name}
        value={props.value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={!IS_BROWSER || props.disabled}
        required={props.required}
        onInput={handleInput}
        class={`select select-bordered ${
          showErrors.value ? "select-error" : "select-primary"
        }`}
      >
        <option value="" selected>{props.defaultValue}</option>
        {props.children}
      </select>
      <label class="label">
        <span class="label-text text-error">
          {showErrors.value && props.error}
        </span>
      </label>
    </div>
  );
}
