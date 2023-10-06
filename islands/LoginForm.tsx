import { useSignal, useSignalEffect } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { IconUserCircle } from "@tabler-icons";
import { Alert } from "@/components/Alerts.tsx";
import { LoginUserSchema } from "@/schema/user.ts";

export default function LoginForm() {
  const email = useSignal("");
  const emailErrors = useSignal<string>("");

  const password = useSignal("");
  const passwordErrors = useSignal<string>("");

  const isDisabled = useSignal<boolean>(false);

  useSignalEffect(() => {
    const result = LoginUserSchema.safeParse({
      email: email.value,
      password: password.value,
    });
    if (!result.success) {
      const formattedErrors = result.error.format();
      emailErrors.value = formattedErrors.email?._errors.join(", ") ?? "";
      passwordErrors.value = formattedErrors.password?._errors.join(", ") ?? "";
      isDisabled.value = true;
    } else {
      emailErrors.value = "";
      passwordErrors.value = "";
      isDisabled.value = false;
    }
  });

  function handleEmailInput(event: Event) {
    email.value = (event.target as HTMLInputElement).value;
  }

  function handlePasswordInput(event: Event) {
    password.value = (event.target as HTMLInputElement).value;
  }

  // TODO: ARREGLAR LONGITUD MAXIMA DEL INPUT

  return (
    <div class="flex flex-col gap-4 w-max">
      <IconUserCircle size={96} class="self-center" />
      <div class="flex flex-col font-sans w-full">
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text font-semibold">
              Correo:
            </span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onInput={handleEmailInput}
            disabled={!IS_BROWSER}
            class={`input ${
              passwordErrors.value ? "input-error" : "input-primary"
            } input-bordered w-full max-w-xs`}
          />
          <label class="label">
            <span class="label-text text-error">{emailErrors}</span>
          </label>
        </div>

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text font-semibold">Contraseña:</span>
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onInput={handlePasswordInput}
            disabled={!IS_BROWSER}
            class={`input ${
              passwordErrors.value ? "input-error" : "input-primary"
            } input-bordered w-full max-w-xs`}
          />
          <label class="label">
            <span class="label-text text-error">{passwordErrors}</span>
          </label>
        </div>
      </div>
      <button
        class="btn btn-primary text-content-primary font-sans"
        type="submit"
        disabled={!IS_BROWSER || isDisabled.value}
      >
        Iniciar sesión
      </button>
    </div>
  );
}
