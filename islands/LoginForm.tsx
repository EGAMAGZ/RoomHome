import { useSignal, useSignalEffect } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { IconUserCircle } from "@tabler-icons";
import { Alert } from "@/components/Alerts.tsx";
import { LoginUserSchema } from "@/schema/user.ts";
import { useEffect } from "preact/hooks";

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

  return (
    <div class="flex flex-col">
      <IconUserCircle size={96} class="self-center" />

      <div class="grid grid-cols-[min-content_1fr] gap-x-4">
        <label>Correo:</label>
        <input
          type="email"
          name="email"
          value={email}
          onInput={handleEmailInput}
          disabled={!IS_BROWSER}
        />
        {emailErrors.value !== "" && (
          <Alert message={emailErrors.value} classList="col-span-2" />
        )}

        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={password}
          onInput={handlePasswordInput}
          disabled={!IS_BROWSER}
        />
        {passwordErrors.value !== "" && (
          <Alert message={passwordErrors.value} classList="col-span-2" />
        )}
      </div>
      <button
        class="bg-[#6610F5] text-white py-2 px-4 rounded disabled:bg-[#CAACFC]"
        type="submit"
        disabled={!IS_BROWSER || isDisabled.value}
      >
        {String(!IS_BROWSER)}
        {String(isDisabled.value)}
        Iniciar sesión
      </button>
    </div>
  );
}
