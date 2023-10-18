import { z } from "zod";

export const UserLoginSchema = z.object({
  email: z.string(
    {
      required_error: "Correo electronico es requerido",
      invalid_type_error: "Correo electronico debe ser texto",
    },
  ).email({
    message: "Correo electronico no válido",
  }),
  password: z.string(
    {
      required_error: "Contraseña es requerida",
      invalid_type_error: "Contraseña debe ser un string",
    },
  ).min(8, {
    message: "Contraseña debe tener al menos 8 caracteres",
  }).max(128, {
    message: "Contraseña debe tener menos de 128 caracteres",
  }),
});

export type UserLogin = z.infer<typeof UserLoginSchema>;
