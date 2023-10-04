import { z } from "zod";

export const RegisterClientSchema = z.object({
  name: z.string({
    invalid_type_error: "Nombre debe ser un string",
    required_error: "Nombre es requerido",
  }).max(25, {
    message: "Nombre debe tener menos de 25 caracteres",
  }),
  phone: z.string({
    invalid_type_error: "Teléfono debe ser un string",
    required_error: "Teléfono es requerido",
  }).length(10),
  type: z.string({
    invalid_type_error: "Tipo de inmueble debe ser un string",
    required_error: "Tipo de inmueble es harmonido",
  }),
  amount: z.coerce.number({
    invalid_type_error: "Importe debe ser un numero",
    required_error: "Importe es harmonido",
  }).max(9999999999, {
    message: "Importe debe ser menor a 10",
  }).min(1, {
    message: "Importe debe ser mayor a 1",
  }),
  employee: z.string({
    invalid_type_error: "Empleado debe ser un string",
    required_error: "Empleado es requerido",
  }).max(25, { message: "Empleado debe tener menos de 25 caracteres" }),
  office: z.string({
    invalid_type_error: "Sucursal debe ser un string",
    required_error: "Sucursal es harmonido",
  }).max(30, {
    message: "Sucursal debe tener menos de 30 caracteres",
  }),
  email: z.string({
    required_error: "Email es requerido",
    invalid_type_error: "Email debe ser un string",
  }).email({
    message: "Email no válido",
  }),
  password: z.string({
    invalid_type_error: "Password debe ser un string",
    required_error: "Password es requerido",
  }).max(255, {
    message: "Password debe tener menos de 255 caracteres",
  }),
});
