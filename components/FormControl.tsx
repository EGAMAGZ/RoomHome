import { Signal } from "@preact/signals";
import { ComponentChildren } from "preact";

interface FormControlProps {
  children: ComponentChildren;
  label: string;
  error: Signal<string>;
}

export default function FormControl(
  { children, error, label }: FormControlProps,
) {
  return (
    <div class="form-control">
      <label class="label">
        <span class="label-text font-semibold">{label}</span>
      </label>

      {children}

      <label class="label">
        <span class="label-text text-error">{error}</span>
      </label>
    </div>
  );
}
