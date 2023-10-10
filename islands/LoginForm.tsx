import { useSignal, useSignalEffect } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { IconUserCircle } from "@tabler-icons";
import { UserLoginSchema } from "@/schema/user.ts";
import Button from "@/components/Button.tsx";
import FormControl from "@/components/FormControl.tsx";
import { Alert } from "@/components/Alerts.tsx";

interface LoginFormProps {
  error: string;
}

export default function LoginForm({ error }: LoginFormProps) {
  const email = useSignal("");
  const emailErrors = useSignal<string>("");

  const password = useSignal("");
  const passwordErrors = useSignal<string>("");

  useSignalEffect(() => {
    const result = UserLoginSchema.safeParse({
      email: email.value,
      password: password.value,
    });
    if (!result.success) {
      const formattedErrors = result.error.format();
      emailErrors.value = formattedErrors.email?._errors.join(", ") ?? "";
      passwordErrors.value = formattedErrors.password?._errors.join(", ") ?? "";
    } else {
      emailErrors.value = "";
      passwordErrors.value = "";
    }
  });

  function handleEmailInput(event: Event) {
    email.value = (event.target as HTMLInputElement).value;
  }

  function handlePasswordInput(event: Event) {
    password.value = (event.target as HTMLInputElement).value;
  }

  return (
    <form method="POST">
      <div class="flex flex-col gap-4">
        <IconUserCircle size={96} class="self-center" />
        {error && <Alert message={"Correo o contraseña son incorrectos"} />}
        <div class="flex flex-col font-sans">
          <FormControl
            label="Correo:"
            error={emailErrors}
          >
            <input
              type="email"
              name="email"
              value={email}
              onInput={handleEmailInput}
              disabled={!IS_BROWSER}
              class={`input ${
                passwordErrors.value ? "input-error" : "input-primary"
              } input-bordered`}
              required
            />
          </FormControl>

          <FormControl
            label="Contraseña:"
            error={passwordErrors}
          >
            <input
              type="password"
              name="password"
              value={password}
              onInput={handlePasswordInput}
              disabled={!IS_BROWSER}
              class={`input ${
                passwordErrors.value ? "input-error" : "input-primary"
              } input-bordered`}
              required
            />
          </FormControl>
        </div>
        <Button
          type="submit"
          state="primary"
        >
          <span>Iniciar sesión</span>
        </Button>
      </div>
    </form>
  );
}
