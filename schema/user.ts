import { z } from "zod";

export const LoginUser = z.object({
  email: z.string(
    {
      required_error: "Correo es requerido",
      invalid_type_error: "Correo debe ser un string",
    },
  ).email({
    message: "Correo no válido",
  }),
  password: z.string(
    {
      required_error: "Contraseña es requerida",
      invalid_type_error: "Contraseña debe ser un string",
    },
  )
    .min(6, {
      message: "Contraseña debe tener al menos 6 caracteres",
    }),
});
