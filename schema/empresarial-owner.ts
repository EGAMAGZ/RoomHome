import { z } from "zod";

export const RegisterEmpresarialOwnerSchema = z.object({
  nom_empresa: z.string({
    invalid_type_error: "Nombre de la empresa debe ser un string",
    required_error: "Nombre de la empresa es requerido",
  }).max(25, {
    message: "Nombre de la empresa debe tener menos de 25 caracteres",
  }).nonempty({
    message: "Nombre de la empresa es requerido",
  }),
  tipo_empresa: z.string({
    invalid_type_error: "Tipo de empresa debe ser un string",
    required_error: "Tipo de empresa es requerido",
  }).max(30, {
    message: "Tipo de empresa debe tener menos de 30 caracteres",
  }).nonempty({
    message: "Tipo de empresa es requerido",
  }),
  dir_empresa: z.string({
    invalid_type_error: "Dirección debe ser un string",
    required_error: "Dirección es requerida",
  }).max(100, {
    message: "Dirección debe tener menos de 100 caracteres",
  }).nonempty({
    message: "Dirección es requerida",
  }),
  tel_empresa: z.coerce.number({
    invalid_type_error: "Teléfono debe ser un numero",
    required_error: "Teléfono es requerido",
  }).positive({
    message: "Teléfono debe ser positivo",
  }).int({
    message: "Telén debe ser un número entero",
  }).safe({
    message: "Teléfono es un número invalido",
  }).refine((value) => value.toString().length === 10, {
    message: "Teléfono debe tener 10 caracteres",
  }).transform((value) => value.toString()),
  nom_contacto: z.string({
    invalid_type_error: "Nombre debe ser un string",
    required_error: "Nombre es requerido",
  }).max(100, {
    message: "Nombre debe tener menos de 100 caracteres",
  }).nonempty({
    message: "Nombre de contacto es requerido",
  }),
});
