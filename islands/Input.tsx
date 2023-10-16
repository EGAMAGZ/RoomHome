import { Signal, useComputed, useSignal } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface InputProps {
  value: Signal<string>;
  error: Signal<string>;
  label: string;
  type: "email" | "number" | "password" | "text" | "tel";
  name: string;
  required?: boolean;
  disabled?: boolean;
  classList?: string;
}

export function Input(props: InputProps) {
  const isTouched = useSignal(false);

  // const isEmpty = useComputed(() => props.value.value.trim() === "");

  // const showErrors = useComputed(() =>
  //   isTouched.value && props.error.value && isEmpty.value
  // );

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
    props.value.value = (event.target as HTMLInputElement).value;
  };

  return (
    <div class={`form-control ${props.classList ?? ""}`}>
      <label class="label">
        <span class="label-text font-semibold">{props.label}</span>
      </label>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        required={props.required}
        disabled={!IS_BROWSER || props.disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onInput={handleInput}
        class={`input input-bordered ${
          showErrors.value ? "input-error" : "input-primary"
        }`}
      />
      <label class="label">
        <span class="label-text text-error">
          {showErrors.value && props.error}
        </span>
      </label>
    </div>
  );
}
