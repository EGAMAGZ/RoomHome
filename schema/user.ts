import { z } from "zod";
import { RegisterClientSchema } from "@/schema/client.ts";

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

export const UserRegisterSchema = RegisterClientSchema.merge(
  z.object({
    confirm_pass: z.string({
      invalid_type_error: "Contraseña debe ser texto",
      required_error: "Contraseña es requerido",
    }).min(8, {
      message: "Contraseña debe tener al menos 8 caracteres",
    }).max(128, {
      message: "Contraseña debe tener menos de 128 caracteres",
    }),
  }),
).refine((data) => data.pass_cliente === data.confirm_pass, {
  message: "Las contraseñas no coinciden",
  path: ["confirm_pass"],
});
