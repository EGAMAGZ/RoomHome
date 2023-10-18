import { useSignal, useSignalEffect } from "@preact/signals";
import { IconUserCircle } from "@tabler-icons";
import { UserLoginSchema } from "@/schema/user.ts";
import Button from "@/components/Button.tsx";
import { Alert } from "@/components/Alerts.tsx";
import { Input } from "@/islands/Input.tsx";

interface LoginFormProps {
  error: string;
}

export default function LoginForm({ error }: LoginFormProps) {
  const isLoading = useSignal(false);

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

  return (
    <form method="POST">
      <div class="flex flex-col gap-4">
        <IconUserCircle size={96} class="self-center" />
        {error && <Alert message={error} />}
        <div class="flex flex-col font-sans">
          <Input
            value={email}
            error={emailErrors}
            label="Correo:"
            type="email"
            name="email"
            disabled={isLoading.value}
            required
          />

          <Input
            value={password}
            error={passwordErrors}
            label="Contraseña:"
            type="password"
            name="password"
            disabled={isLoading.value}
            required
          />
        </div>
        <Button
          type="submit"
          state="primary"
          disabled={isLoading.value}
          loading={isLoading.value}
        >
          <span>Iniciar sesión</span>
        </Button>
      </div>
    </form>
  );
}
