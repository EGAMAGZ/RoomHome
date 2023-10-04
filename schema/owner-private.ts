import { z } from "zod";

export const RegisterPrivateOwnerSchema = z.object({
  name: z.string({
    invalid_type_error: "Nombre debe ser un string",
    required_error: "Nombre es requerido",
  }).max(25, {
    message: "Nombre debe tener menos de 25 caracteres",
  }).min(4, {
    message: "Nombre debe tener al menos 4 caracteres",
  }),
  address: z.string({
    invalid_type_error: "Dirección debe ser un string",
    required_error: "Dirección es requerida",
  }).max(30, {
    message: "Dirección debe tener menos de 30 caracteres",
  }),
  phone: z.string({
    invalid_type_error: "Teléfono debe ser un string",
    required_error: "Teléfono es requerido",
  }).length(10, {
    message: "Teléfono debe tener 10 caracteres",
  }),
});
