import { InputState } from "@/schema/input-state.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";

interface ButtonProps {
  state: InputState;
  type: "button" | "submit";
  onClick?: (event: Event) => void;
  children: ComponentChildren;
  classList?: string;
  disabled?: boolean;
  loading?: boolean;
}
2
export default function Button(props: ButtonProps) {
  return (
    <button
      class={`btn btn-${props.state} font-sans font-semibold ${props.classList ?? ""}`}
      type={props.type}
      disabled={!IS_BROWSER || props.disabled}
      onClick={props.onClick}
    >
      {props.loading
        ? (
          <>
            <span className="loading loading-spinner"></span>
            Cargando
          </>
        )
        : (
          props.children
        )}
    </button>
  );
}
