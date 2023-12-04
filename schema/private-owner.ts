import { z } from "zod";
import { phoneNumberRegex } from "@/utils/regex.ts";

export const RegisterPrivateOwnerSchema = z.object({
  nom_propietario: z.string({
    invalid_type_error: "Nombre debe ser un string",
    required_error: "Nombre es requerido",
  }).max(100, {
    message: "Nombre debe tener menos de 100 caracteres",
  }).nonempty({
    message: "Nombre es requerido",
  }),
  dir_propietario: z.string({
    invalid_type_error: "Dirección debe ser un string",
    required_error: "Dirección es requerida",
  }).max(100, {
    message: "Dirección debe tener menos de 30 caracteres",
  }).nonempty({
    message: "Dirección es requerida",
  }),
  tel_propietario: z.string()
    .regex(phoneNumberRegex, {
      message: "Telefono invalido",
    }),
});
